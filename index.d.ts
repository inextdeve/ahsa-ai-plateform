interface FullScreenProps {
  handle: FullScreenHandle;
  // Handle that helps operate the full screen state.

  onChange?: (state: boolean, handle: FullScreenHandle) => void;
  // Optional callback that gets called when this screen changes state.

  className?: string;
  // Optional prop allowing you to apply a custom class name to the FullScreen container
}

interface FullScreenHandle {
  active: boolean;
  // Specifies if attached element is currently full screen.

  enter: () => Promise<void>;
  // Requests this element to go full screen.

  exit: () => Promise<void>;
  // Requests this element to exit full screen.

  node: React.MutableRefObject<HTMLDivElement | null>;
  // The attached DOM node
}
