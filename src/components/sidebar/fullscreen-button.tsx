import { Button } from "@nextui-org/react";
import { Fullscreen } from "lucide-react";
import { type useFullScreenHandle } from "react-full-screen";
import { useFullScreen } from "@/providers/full-screen";

interface fullScreenState {
  handleScreen: ReturnType<typeof useFullScreenHandle>;
  isFullScreen: boolean;
}

const FullscreenButton = () => {
  const { handleScreen, isFullScreen } = useFullScreen() as fullScreenState;

  return (
    <>
      {!isFullScreen ? (
        <Button
          variant="light"
          size="sm"
          onClick={handleScreen.enter}
          className="md:block hidden"
        >
          <Fullscreen className="w-7 h-7 text-cyan-500" />
        </Button>
      ) : (
        <Button
          variant="light"
          size="sm"
          onClick={handleScreen.exit}
          className="md:block hidden"
        >
          <Fullscreen className="w-7 h-7 text-cyan-500" />
        </Button>
      )}
    </>
  );
};

export default FullscreenButton;
