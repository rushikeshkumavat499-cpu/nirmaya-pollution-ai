import { HMPICalculator } from "@/components/HMPICalculator"
import { GeoMap } from "@/components/GeoMap"

const Index = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">HMPI Calculator Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Calculate Heavy Metal Pollution Index and visualize environmental data
        </p>
      </div>
      
      <HMPICalculator />
      <GeoMap />
    </div>
  );
};

export default Index;
