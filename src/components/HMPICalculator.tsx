import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Calculator, Upload, FileText, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

interface MetalData {
  name: string
  concentration: number
  backgroundValue: number
  weight: number
}

interface HMPIResult {
  value: number
  category: 'safe' | 'moderate' | 'unsafe'
  interpretation: string
  recommendation: string
}

const defaultMetals: MetalData[] = [
  { name: "Lead (Pb)", concentration: 0, backgroundValue: 20, weight: 3 },
  { name: "Cadmium (Cd)", concentration: 0, backgroundValue: 0.3, weight: 5 },
  { name: "Mercury (Hg)", concentration: 0, backgroundValue: 0.1, weight: 4 },
  { name: "Arsenic (As)", concentration: 0, backgroundValue: 10, weight: 4 },
  { name: "Chromium (Cr)", concentration: 0, backgroundValue: 100, weight: 2 },
]

export function HMPICalculator() {
  const [metals, setMetals] = useState<MetalData[]>(defaultMetals)
  const [result, setResult] = useState<HMPIResult | null>(null)
  const [csvData, setCsvData] = useState("")

  const calculateHMPI = () => {
    let numerator = 0
    let denominator = 0

    metals.forEach(metal => {
      if (metal.concentration > 0 && metal.backgroundValue > 0) {
        const qi = (metal.concentration / metal.backgroundValue) * 100
        numerator += qi * metal.weight
        denominator += metal.weight
      }
    })

    if (denominator === 0) return

    const hmpiValue = numerator / denominator
    let category: 'safe' | 'moderate' | 'unsafe'
    let interpretation: string
    let recommendation: string

    if (hmpiValue < 50) {
      category = 'safe'
      interpretation = "Low pollution level. The aquatic ecosystem is in good condition with minimal heavy metal contamination."
      recommendation = "Continue regular monitoring every 6 months. Maintain current environmental protection measures."
    } else if (hmpiValue <= 100) {
      category = 'moderate'
      interpretation = "Moderate pollution level. Some stress on aquatic ecosystems is expected with potential for bioaccumulation."
      recommendation = "Increase monitoring frequency to every 3 months. Implement immediate pollution control measures and identify contamination sources."
    } else {
      category = 'unsafe'
      interpretation = "High pollution level. Severe environmental and ecological risks with significant threat to aquatic life and human health."
      recommendation = "Immediate action required! Implement emergency remediation protocols and restrict water usage until levels improve."
    }

    setResult({
      value: Math.round(hmpiValue * 100) / 100,
      category,
      interpretation,
      recommendation
    })
  }

  const updateMetal = (index: number, field: keyof MetalData, value: string | number) => {
    const updatedMetals = [...metals]
    updatedMetals[index] = { ...updatedMetals[index], [field]: value }
    setMetals(updatedMetals)
  }

  const addMetal = () => {
    setMetals([...metals, { name: "", concentration: 0, backgroundValue: 0, weight: 1 }])
  }

  const removeMetal = (index: number) => {
    setMetals(metals.filter((_, i) => i !== index))
  }

  const processCsvData = () => {
    // Simple CSV processing - in real app, you'd use a proper CSV parser
    const lines = csvData.trim().split('\n')
    if (lines.length < 2) return

    const headers = lines[0].split(',')
    const newMetals: MetalData[] = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',')
      if (values.length >= 4) {
        newMetals.push({
          name: values[0]?.trim() || `Metal ${i}`,
          concentration: parseFloat(values[1]) || 0,
          backgroundValue: parseFloat(values[2]) || 1,
          weight: parseFloat(values[3]) || 1
        })
      }
    }

    if (newMetals.length > 0) {
      setMetals(newMetals)
      setCsvData("")
    }
  }

  const getResultIcon = (category: string) => {
    switch (category) {
      case 'safe': return <CheckCircle className="h-5 w-5 text-safe" />
      case 'moderate': return <AlertCircle className="h-5 w-5 text-moderate" />
      case 'unsafe': return <AlertTriangle className="h-5 w-5 text-unsafe" />
      default: return null
    }
  }

  const getResultBadge = (category: string) => {
    const variants = {
      safe: "bg-safe/10 text-safe border-safe/20",
      moderate: "bg-moderate/10 text-moderate border-moderate/20",
      unsafe: "bg-unsafe/10 text-unsafe border-unsafe/20"
    }
    return variants[category as keyof typeof variants] || ""
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-scientific">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>HMPI Calculator</CardTitle>
              <CardDescription>
                Calculate Heavy Metal Pollution Index using the formula: HMPI = Σ(Qi × Wi) / ΣWi
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="manual" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manual">Manual Entry</TabsTrigger>
              <TabsTrigger value="csv">CSV Upload</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="manual" className="space-y-4">
              <div className="space-y-4">
                {metals.map((metal, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                      <div>
                        <Label htmlFor={`metal-name-${index}`}>Metal Name</Label>
                        <Input
                          id={`metal-name-${index}`}
                          value={metal.name}
                          onChange={(e) => updateMetal(index, 'name', e.target.value)}
                          placeholder="e.g., Lead (Pb)"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`concentration-${index}`}>Concentration (mg/L)</Label>
                        <Input
                          id={`concentration-${index}`}
                          type="number"
                          step="0.01"
                          value={metal.concentration}
                          onChange={(e) => updateMetal(index, 'concentration', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`background-${index}`}>Background Value (mg/L)</Label>
                        <Input
                          id={`background-${index}`}
                          type="number"
                          step="0.01"
                          value={metal.backgroundValue}
                          onChange={(e) => updateMetal(index, 'backgroundValue', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`weight-${index}`}>Weight Factor</Label>
                        <Input
                          id={`weight-${index}`}
                          type="number"
                          min="1"
                          max="5"
                          value={metal.weight}
                          onChange={(e) => updateMetal(index, 'weight', parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <Button variant="destructive" size="sm" onClick={() => removeMetal(index)}>
                        Remove
                      </Button>
                    </div>
                  </Card>
                ))}
                
                <div className="flex gap-2">
                  <Button variant="outline" onClick={addMetal}>
                    Add Metal
                  </Button>
                  <Button onClick={calculateHMPI} className="bg-gradient-to-r from-primary to-accent">
                    Calculate HMPI
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="csv" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="csv-data">CSV Data</Label>
                  <Textarea
                    id="csv-data"
                    placeholder="Metal Name, Concentration, Background Value, Weight&#10;Lead (Pb), 45.2, 20, 3&#10;Cadmium (Cd), 2.1, 0.3, 5"
                    value={csvData}
                    onChange={(e) => setCsvData(e.target.value)}
                    rows={6}
                  />
                </div>
                <Button onClick={processCsvData}>
                  <Upload className="h-4 w-4 mr-2" />
                  Process CSV Data
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-4">
              {result ? (
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {getResultIcon(result.category)}
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold">HMPI = {result.value}</h3>
                        <Badge className={getResultBadge(result.category)}>
                          {result.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    <Alert className={`border-l-4 ${
                      result.category === 'safe' ? 'border-l-safe bg-safe/5' :
                      result.category === 'moderate' ? 'border-l-moderate bg-moderate/5' :
                      'border-l-unsafe bg-unsafe/5'
                    }`}>
                      <AlertDescription className="text-sm leading-relaxed">
                        <strong>Interpretation:</strong> {result.interpretation}
                      </AlertDescription>
                    </Alert>

                    <Alert className="mt-4">
                      <FileText className="h-4 w-4" />
                      <AlertDescription className="text-sm leading-relaxed">
                        <strong>Recommendation:</strong> {result.recommendation}
                      </AlertDescription>
                    </Alert>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Detailed Analysis</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Metal</th>
                            <th className="text-left p-2">Concentration</th>
                            <th className="text-left p-2">Background</th>
                            <th className="text-left p-2">Qi Value</th>
                            <th className="text-left p-2">Weight</th>
                          </tr>
                        </thead>
                        <tbody>
                          {metals.map((metal, index) => {
                            const qi = metal.backgroundValue > 0 ? (metal.concentration / metal.backgroundValue) * 100 : 0
                            return (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{metal.name}</td>
                                <td className="p-2">{metal.concentration} mg/L</td>
                                <td className="p-2">{metal.backgroundValue} mg/L</td>
                                <td className="p-2">{qi.toFixed(2)}</td>
                                <td className="p-2">{metal.weight}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground">No results yet. Please calculate HMPI first.</p>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}