import { AspectRatio } from "./AspectRatio";

interface CanvasTextSectionProps {
    text: string;
    CanvasComponent: React.ComponentType<any>; // ToDo: shouldnt this be passed as children to the component
    canvasProps?: object; //ToDo: this would be unnecessary because the child is passed directly and can have its own properties
    order?: 'left' | 'right'; 
  }
  

const CanvasTextSection: React.FC<CanvasTextSectionProps> = ({ text, CanvasComponent, canvasProps= {}, order = 'left' }) => {
    const isCanvasLeft = order === 'left';

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-x-6">
            {isCanvasLeft && (
                <div className="w-3/5">
                <AspectRatio ratio={1 / 1}>
                    <CanvasComponent {...canvasProps}/>
                </AspectRatio>
                </div>
            )}
            
            <div className="flex flex-col justify-center mt-4 sm:mt-4 w-4/5 sm:w-2/5">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center sm:text-left">
                {text}
                </p>
            </div>

            {!isCanvasLeft && (
                <div className="w-3/5">
                <AspectRatio ratio={1 / 1}>
                    <CanvasComponent {...canvasProps}/>
                </AspectRatio>
                </div>
            )}
        </div>
    );
};

export default CanvasTextSection;