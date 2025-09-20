import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, Upload, Download } from "lucide-react"

const Trends = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Trend Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Historical data tracking and anomaly detection for pollution monitoring
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-scientific">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Data Upload
            </CardTitle>
            <CardDescription>Upload historical CSV data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload Historical Data
              </Button>
              <Badge variant="secondary">0 datasets uploaded</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-scientific">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Time Range
            </CardTitle>
            <CardDescription>Select analysis period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Select Date Range
              </Button>
              <Badge variant="secondary">Last 12 months</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-scientific">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              Export
            </CardTitle>
            <CardDescription>Download trend reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export Trends
              </Button>
              <Badge variant="secondary">PDF & Excel</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-scientific">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardTitle>Historical Trend Visualization</CardTitle>
          <CardDescription>
            Track pollution levels over time and identify patterns or anomalies
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <div className="text-center space-y-2">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-lg font-medium text-muted-foreground">Trend Analysis Chart</p>
              <p className="text-sm text-muted-foreground">
                Upload historical data to see trend visualization
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-scientific">
        <CardHeader>
          <CardTitle>Anomaly Detection</CardTitle>
          <CardDescription>
            Automatically identify unusual spikes or drops in pollution levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                No anomalies detected. Upload historical data to enable anomaly detection.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Trends