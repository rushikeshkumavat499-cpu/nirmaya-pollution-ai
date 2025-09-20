import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, AlertTriangle } from "lucide-react"

const MultiIndex = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Multi-Index Pollution Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Compare HEI, Cd, PLI, Cdeg, and MI pollution indices for comprehensive analysis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-scientific">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              HEI Analysis
            </CardTitle>
            <CardDescription>Hazard Evaluation Index</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Current Value:</span>
                <Badge variant="secondary">Coming Soon</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Evaluates potential ecological hazards from heavy metal contamination
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-scientific">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Cd Analysis
            </CardTitle>
            <CardDescription>Contamination Degree</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Current Value:</span>
                <Badge variant="secondary">Coming Soon</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Measures overall contamination degree of sediments
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-scientific">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              PLI Analysis
            </CardTitle>
            <CardDescription>Pollution Load Index</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Current Value:</span>
                <Badge variant="secondary">Coming Soon</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Assesses overall pollution status of environmental matrices
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-scientific">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardTitle>Index Comparison Chart</CardTitle>
          <CardDescription>
            Visual comparison of different pollution indices for comprehensive analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center space-y-2">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-lg font-medium text-muted-foreground">Comparison Chart</p>
              <p className="text-sm text-muted-foreground">
                Interactive charts will display when data is available
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MultiIndex