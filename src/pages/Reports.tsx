import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Share, PieChart, BarChart } from "lucide-react"

const Reports = () => {
  const reportTemplates = [
    {
      name: "Environmental Assessment Report",
      description: "Comprehensive pollution analysis with recommendations",
      format: "PDF",
      sections: ["Executive Summary", "HMPI Analysis", "Recommendations", "Methodology"]
    },
    {
      name: "Data Export Report",
      description: "Raw data and calculations in spreadsheet format",
      format: "Excel",
      sections: ["Raw Data", "Calculations", "Charts", "Metadata"]
    },
    {
      name: "Compliance Report",
      description: "Regulatory compliance assessment",
      format: "PDF",
      sections: ["Compliance Status", "Violations", "Action Items", "Timeline"]
    }
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Reports & Insights</h1>
        <p className="text-lg text-muted-foreground">
          Generate comprehensive reports and share insights with stakeholders
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reportTemplates.map((template, index) => (
          <Card key={index} className="shadow-scientific">
            <CardHeader>
              <div className="flex items-center justify-between">
                <FileText className="h-5 w-5 text-primary" />
                <Badge variant="secondary">{template.format}</Badge>
              </div>
              <CardTitle className="text-lg">{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Included Sections:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {template.sections.map((section, idx) => (
                    <li key={idx}>• {section}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Generate
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-scientific">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Report Analytics
            </CardTitle>
            <CardDescription>
              Track report generation and usage statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="font-medium">Reports Generated</span>
                <Badge variant="secondary">0</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="font-medium">Most Popular Format</span>
                <Badge variant="secondary">PDF</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                <span className="font-medium">Shared Reports</span>
                <Badge variant="secondary">0</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-scientific">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              AI Insights Generator
            </CardTitle>
            <CardDescription>
              Automated environmental insights and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-medium mb-2">Sample AI Insight:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Based on current HMPI analysis, immediate attention is required for industrial zones showing values {'>'}100. 
                  Recommend implementing stricter effluent treatment protocols and increasing monitoring frequency to bi-weekly intervals."
                </p>
              </div>
              <Button className="w-full">
                Generate AI Insights
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-scientific">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>
            View and manage previously generated reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">No reports generated yet</p>
                  <p className="text-sm text-muted-foreground">Generate your first report to see it here</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Reports