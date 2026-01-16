import { MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { wavingAnimation } from "../utils/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";

const PulsingMarker = () => (
  <div className="relative flex items-center justify-center">
    <div className="absolute size-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 pulsing-marker-ring" />
    <div className="absolute size-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pulsing-marker-ring-delayed" />
    <div className="relative size-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white shadow-lg shadow-purple-500/50" />
  </div>
);

export const AboutMe = () => {
  const munsterCoords = { lat: 51.9607, lng: 7.6261 };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <span className="hash-span" id="AboutMe">
        &nbsp;
      </span>
      
      <div className="max-w-7xl mx-auto">
        <Card className="bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 border-purple-500/20 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 sm:p-12 flex flex-col gap-6">
                <div>
                  <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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

                <Separator className="bg-purple-500/20" />

                {/* Location */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPinIcon className="h-6 w-6 text-purple-400" />
                  <span className="text-lg">Münster, Germany</span>
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
                  })()} year-old computer science bachelor's graduate with a foundation in data science, machine learning, and AI. Currently pursuing a master's degree at the University of Münster.
                </p>

              </div>

              {/* Right side - Map widget */}
              <div className="relative w-full lg:w-80 h-48 lg:h-auto lg:min-h-[280px]">
                {/* gradient blending */}
                <div className="absolute opacity-75 inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent lg:block hidden" />
                <div className="absolute opacity-50 inset-0 z-10 pointer-events-none bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60 lg:hidden" />
                <div className="absolute opacity-50 inset-0 z-10 pointer-events-none bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />
                
                <Map
                  center={[munsterCoords.lng, munsterCoords.lat - 0.001]}
                  zoom={12}
                  theme="dark"
                  interactive={false}
                  attributionControl={false}
                  scrollZoom={false}
                  dragPan={false}
                  dragRotate={false}
                  doubleClickZoom={false}
                  touchZoomRotate={false}
                >
                  <MapMarker
                    longitude={munsterCoords.lng}
                    latitude={munsterCoords.lat - 0.001}
                  >
                    <MarkerContent>
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
