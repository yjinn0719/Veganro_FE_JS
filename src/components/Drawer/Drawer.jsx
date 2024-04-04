import { useEffect } from 'react';
import { useDragControls } from 'framer-motion';

import {
  DrawerContainer,
  BackgroundOverlay,
  SheetBackground,
  BottomHeader,
  HandleBar,
  SheetContentWrapper,
  SheetContent,
} from './Drawer.styels.js';

export default function Drawer({ isopen, onClose, children, height }) {
  const dragControls = useDragControls();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isopen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isopen, onClose]);

  return (
    <DrawerContainer isopen={isopen}>
      <BackgroundOverlay
        initial={false}
        animate={{ opacity: isopen ? 0.7 : 0 }}
        style={{
          pointerEvents: isopen ? 'all' : 'none',
          backdropFilter: `blur(${isopen ? 1 : 0}px)`,
        }}
        onTap={onClose}
      />
      <SheetBackground height={height} isopen={isopen}>
        <BottomHeader onPointerDown={(e) => dragControls.start(e)}>
          <HandleBar />
        </BottomHeader>
        {isopen && (
          <SheetContentWrapper>
            <SheetContent>{children}</SheetContent>
          </SheetContentWrapper>
        )}
      </SheetBackground>
    </DrawerContainer>
  );
}
