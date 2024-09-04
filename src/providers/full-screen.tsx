import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScreenContext = React.createContext({});

export const FullScreenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleScreen = useFullScreenHandle();

  const [isFullScreen, setIsFullScreen] = React.useState(handleScreen.active);

  const reportChange = React.useCallback(
    (state: boolean, handle: FullScreenHandle) => {
      if (handle === handleScreen) {
        setIsFullScreen(handleScreen.active);
      }
    },
    [handleScreen]
  );

  return (
    <FullScreen
      handle={handleScreen}
      onChange={reportChange}
      className="bg-background"
    >
      <FullScreenContext.Provider value={{ handleScreen, isFullScreen }}>
        {children}
      </FullScreenContext.Provider>
    </FullScreen>
  );
};

export const useFullScreen = () => React.useContext(FullScreenContext);
