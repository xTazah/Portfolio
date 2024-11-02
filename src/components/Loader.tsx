import { Html,useProgress } from "@react-three/drei";
import { Progress } from "@nextui-org/react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
        <Progress
            size="sm"
            radius="sm"
            classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-purple-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
                }}
                value={progress}
                label="Loading..."
                showValueLabel={true}
            />
    </Html>
  );
};

export default CanvasLoader;