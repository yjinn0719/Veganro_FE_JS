import { useState } from 'react';
import { useDragControls } from 'framer-motion';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Drawer({ height }) {
  const [isOpened, setIsOpened] = useState(false);
  const [contentRef] = useMeasure();
  const dragControls = useDragControls();

  const toggleDrawer = () => setIsOpened(!isOpened);

  return (
    <DrawerContainer>
      <BackgroundOverlay
        initial={false}
        animate={{ opacity: isOpened ? 0.7 : 0 }}
        style={{
          pointerEvents: isOpened ? 'all' : 'none',
          backdropFilter: `blur(${isOpened ? 1 : 0}px)`,
        }}
        onTap={() => setIsOpened(false)}
      />
      <button onClick={toggleDrawer}>Click</button>
      <SheetBackground height={height} isOpened={isOpened}>
        <BottomHeader onPointerDown={(e) => dragControls.start(e)}>
          <HandleBar />
        </BottomHeader>
        {isOpened && (
          <SheetContentWrapper ref={contentRef}>
            <SheetContent></SheetContent>
          </SheetContentWrapper>
        )}
      </SheetBackground>
    </DrawerContainer>
  );
}

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
`;

const SheetBackground = styled(motion.div)`
  position: fixed;
  bottom: ${({ isOpened }) => (isOpened ? '0' : '-100%')};
  max-width: 480px;
  width: 100%;
  height: ${({ height }) => height}vh;
  background: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 24px 24px 0 0;
  padding: 12px 0 24px 0;
  will-change: transform;
  transition: bottom 0.5s ease-in-out;
`;

const BottomHeader = styled.div`
  height: 50px;
  cursor: grab;
  user-select: none;
`;

const HandleBar = styled.div`
  width: 58px;
  height: 8px;
  background: #dfdfdf;
  margin: 0 auto;
`;

const SheetContentWrapper = styled.div`
  width: 100%;
  height: 500px;
  color: black;
  font-size: 16px;
  padding: 24px;
`;

const SheetContent = styled.div`
  font-size: 20px;
  width: 100%;
`;

const DrawerContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
