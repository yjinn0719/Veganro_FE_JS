import { useDragControls, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import {
  BackgroundOverlay,
  SheetBackground,
  BottomHeader,
  HandleBar,
  SheetContentWrapper,
  SheetContent,
  DrawerContainer,
} from './Drawer.styles';

export default function Drawer({ height, children, isOpened, toggleDrawer }) {
  const [contentRef] = useMeasure();
  const dragControls = useDragControls();

  return (
    <DrawerContainer>
      <BackgroundOverlay
        initial={false}
        animate={{ opacity: isOpened ? 0.7 : 0 }}
        style={{
          pointerEvents: isOpened ? 'all' : 'none',
          backdropFilter: `blur(${isOpened ? 1 : 0}px)`,
        }}
        onTap={toggleDrawer}
      />
      <SheetBackground
        height={height}
        isOpened={isOpened}
        initial={{ bottom: `-${height}vh` }}
        animate={{ bottom: isOpened ? 0 : `-${height}vh` }}
        transition={{ duration: 0.5 }}
      >
        <BottomHeader onPointerDown={(e) => dragControls.start(e)}>
          <HandleBar />
        </BottomHeader>
        {isOpened && (
          <SheetContentWrapper ref={contentRef}>
            <SheetContent>{children}</SheetContent>
          </SheetContentWrapper>
        )}
      </SheetBackground>
    </DrawerContainer>
  );
}
