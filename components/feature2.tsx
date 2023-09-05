import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Airplay, GlassWater, Receipt } from "lucide-react";

const Feature2 = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto gap-6 mb-40">
      <Card>
        <CardHeader>
          <GlassWater className="w-20 h-20 text-primaryLight" />
          <CardTitle>Water lavel detect</CardTitle>
          <CardDescription>
            Device detect water level and you can see in the mobile app
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="row-span-4">
        <CardHeader>
          <Airplay className="w-20 h-20 text-primaryLight" />
          <CardTitle>Start/Stop Remotely</CardTitle>
          <CardDescription>
            You can start/stop the water pump from anywhere in the world
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Receipt className="w-20 h-20 text-primaryLight" />
          <CardTitle>Save Electricity Bill</CardTitle>
          <CardDescription>
            Smart tank controller will save water overflow and save electricity.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Feature2;
