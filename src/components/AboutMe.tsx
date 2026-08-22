import { MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { wavingAnimation } from "../utils/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";
import { MailIcon } from "lucide-react";

const PulsingMarker = () => (
  <div className="relative flex items-center justify-center">
    <div className="absolute size-8 rounded-full bg-primary pulsing-marker-ring" />
    <div className="absolute size-8 rounded-full bg-primary pulsing-marker-ring-delayed" />
    <div className="relative size-5 rounded-full bg-primary border-2 border-white shadow-lg shadow-primary/50" />
  </div>
);

export const AboutMe = () => {
  const munsterCoords = { lat: 51.9607, lng: 7.6261 };
  const berkeleyCoords = { lat: 37.8722, lng: -122.2597 };

  const today = new Date();
  const currentYear = today.getFullYear();
  const augustFifteenth = new Date(currentYear, 7, 15); // month is 0-indexed
  const isBerkeleyTime = today >= augustFifteenth;

  const coords = isBerkeleyTime ? berkeleyCoords : munsterCoords;
  const locationName = isBerkeleyTime ? "Berkeley, California, USA" : "Münster, Germany";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <span className="hash-span" id="AboutMe">
        &nbsp;
      </span>
      
      <div className="max-w-7xl mx-auto">
        <Card className="bg-card border-border backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-6 sm:p-10 flex flex-col gap-5">
                <div>
                  <h1 className="text-4xl sm:text-6xl font-black text-foreground leading-tight">
                    Hi, I'm{" "}
                    <span className="text-primary">
                      Finn{" "}
                    </span>
                    <motion.span
                        variants={wavingAnimation()}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        className="inline-block origin-bottom-right">
                        👋
                    </motion.span>
                  </h1>
                </div>

                <Separator className="bg-border" />

                {/* Location */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg">{locationName}</span>
                </div>

                {/* Description */}
                <p className="text-lg sm:text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl">
                  I'm a {(() => {
                    const today = new Date();
                    const birth = new Date("2003-03-26");
                    let age = today.getFullYear() - birth.getFullYear();
                    if (
                      today.getMonth() < birth.getMonth() ||
                      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
                    ) {
                      age--;
                    }
                    return age;
                  })()}-year-old computer science bachelor's graduate with a strong foundation in industrial automation, data science, machine learning, and AI with a research interest in autonomous driving. Currently pursuing a graduate's degree at the University of Münster, visiting UC Berkeley, where I research feedforward 3D scene reconstruction for autonomous driving with Berkeley DeepDrive.
                </p>
                
                <Separator className="bg-border" />

                <div className="flex items-center gap-3 text-muted-foreground">
                  <MailIcon className="h-6 w-6 text-primary" />
                  <a href="mailto:finn.koehler@berkeley.edu" className="text-lg hover:underline">finn.koehler@berkeley.edu</a>
                </div>

              </div>

              {/* Right side - Map widget */}
              <div className="relative w-full lg:w-80 h-48 lg:h-auto lg:min-h-[280px]">
                {/* gradient blending */}
                <div className="absolute opacity-40 inset-0 z-10 pointer-events-none bg-gradient-to-r from-card via-card/30 to-transparent lg:block hidden" />
                <div className="absolute opacity-30 inset-0 z-10 pointer-events-none bg-gradient-to-t from-card/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute opacity-30 inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-card/50" />
                
                <Map
                  center={[coords.lng, coords.lat - 0.001]}
                  zoom={12}
                  interactive={false}
                  attributionControl={false}
                  scrollZoom={false}
                  dragPan={false}
                  dragRotate={false}
                  doubleClickZoom={false}
                  touchZoomRotate={false}
                >
                  <MapMarker
                    longitude={coords.lng}
                    latitude={coords.lat - 0.001}
                  >
                    <MarkerContent className="cursor-default">
                      <PulsingMarker />
                    </MarkerContent>
                  </MapMarker>
                </Map>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
