import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Layers, Filter, Download } from "lucide-react"

// Mock data for demonstration
const sampleLocations = [
  { id: 1, name: "Site A - Industrial Zone", lat: 28.6139, lng: 77.2090, hmpi: 125, category: 'unsafe' },
  { id: 2, name: "Site B - Residential Area", lat: 28.7041, lng: 77.1025, hmpi: 65, category: 'moderate' },
  { id: 3, name: "Site C - Agricultural Land", lat: 28.5355, lng: 77.3910, hmpi: 35, category: 'safe' },
  { id: 4, name: "Site D - River Confluence", lat: 28.6517, lng: 77.2219, hmpi: 88, category: 'moderate' },
  { id: 5, name: "Site E - Protected Forest", lat: 28.5244, lng: 77.1855, hmpi: 25, category: 'safe' },
]

export function GeoMap() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'safe': return 'bg-safe text-safe-foreground'
      case 'moderate': return 'bg-moderate text-moderate-foreground'
      case 'unsafe': return 'bg-unsafe text-unsafe-foreground'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  const getCategoryDot = (category: string) => {
    switch (category) {
      case 'safe': return 'bg-safe'
      case 'moderate': return 'bg-moderate'
      case 'unsafe': return 'bg-unsafe'
      default: return 'bg-muted'
    }
  }

  return (
    <Card className="shadow-scientific">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Pollution Zone Mapping</CardTitle>
              <CardDescription>
                Interactive visualization of HMPI results across different locations
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Layers className="h-4 w-4 mr-2" />
              Layers
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Map Placeholder - In real implementation, you'd use a proper mapping library */}
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-lg font-medium text-muted-foreground">Interactive Map View</p>
              <p className="text-sm text-muted-foreground">
                Real implementation would integrate with mapping services
              </p>
            </div>
            
            {/* Sample location markers overlay */}
            <div className="absolute inset-4 pointer-events-none">
              {sampleLocations.map((location, index) => (
                <div
                  key={location.id}
                  className="absolute w-4 h-4 rounded-full border-2 border-white shadow-lg transform -translate-x-2 -translate-y-2"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 2) * 20}%`,
                  }}
                >
                  <div className={`w-full h-full rounded-full ${getCategoryDot(location.category)}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-safe"></div>
              <span className="text-sm font-medium">Safe (&lt;50)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-moderate"></div>
              <span className="text-sm font-medium">Moderate (50-100)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-unsafe"></div>
              <span className="text-sm font-medium">Unsafe (&gt;100)</span>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Monitoring Locations</h4>
            <div className="grid gap-3">
              {sampleLocations.map((location) => (
                <div key={location.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getCategoryDot(location.category)}`}></div>
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{location.hmpi}</span>
                    <Badge className={getCategoryColor(location.category)}>
                      {location.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Insights */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-4">
              <h4 className="font-semibold mb-2">Environmental Insights</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• <strong>Region Analysis:</strong> Industrial Zone (Site A) shows consistent unsafe levels requiring immediate intervention.</p>
                <p>• <strong>Hotspot Detection:</strong> Sites B and D in moderate range need increased monitoring frequency.</p>
                <p>• <strong>Protected Areas:</strong> Forest areas maintain safe pollution levels, indicating effective conservation.</p>
                <p>• <strong>Recommendation:</strong> Focus remediation efforts on industrial zones while maintaining protection protocols for safe areas.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}