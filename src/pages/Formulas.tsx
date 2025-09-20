import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Beaker, Save, RotateCcw, Code } from "lucide-react"

const Formulas = () => {
  const formulas = [
    {
      name: "HMPI",
      description: "Heavy Metal Pollution Index",
      formula: "HMPI = Σ(Qi × Wi) / ΣWi",
      explanation: "Where Qi = (Ci/Bi) × 100, Wi = weight factor"
    },
    {
      name: "HEI",
      description: "Hazard Evaluation Index",
      formula: "HEI = Σ(Ci/MAC)",
      explanation: "Where Ci = concentration, MAC = Maximum Allowable Concentration"
    },
    {
      name: "PLI",
      description: "Pollution Load Index",
      formula: "PLI = (CF1 × CF2 × ... × CFn)^(1/n)",
      explanation: "Where CF = Contamination Factor for each metal"
    },
    {
      name: "Cd",
      description: "Contamination Degree",
      formula: "Cd = Σ CFi",
      explanation: "Sum of all contamination factors"
    }
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Formula Customization</h1>
        <p className="text-lg text-muted-foreground">
          Customize and edit calculation formulas for pollution indices
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {formulas.map((formula, index) => (
          <Card key={index} className="shadow-scientific">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-primary" />
                  <CardTitle>{formula.name}</CardTitle>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
              <CardDescription>{formula.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor={`formula-${index}`}>Formula</Label>
                <div className="p-3 bg-muted/30 rounded-lg font-mono text-sm">
                  {formula.formula}
                </div>
              </div>
              
              <div>
                <Label htmlFor={`explanation-${index}`}>Explanation</Label>
                <Textarea
                  id={`explanation-${index}`}
                  value={formula.explanation}
                  rows={2}
                  className="resize-none"
                />
              </div>

              <div className="flex gap-2">
                <Button size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-scientific">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Formula Editor
          </CardTitle>
          <CardDescription>
            Advanced formula editing with JSON configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Label htmlFor="json-editor">Formula Configuration (JSON)</Label>
            <Textarea
              id="json-editor"
              placeholder='{\n  "HMPI": {\n    "formula": "Σ(Qi × Wi) / ΣWi",\n    "parameters": {\n      "Qi": "(Ci/Bi) × 100",\n      "Wi": "weight_factor"\n    }\n  }\n}'
              rows={10}
              className="font-mono text-sm"
            />
            <div className="flex gap-2">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Update Formulas
              </Button>
              <Button variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset to Default
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Formulas