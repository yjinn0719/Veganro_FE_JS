import styled from 'styled-components';
import { useDragControls, motion } from 'framer-motion';

export const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
`;

export const SheetBackground = styled(motion.div)`
  position: fixed;
  bottom: ${({ isopen }) => (isopen ? '0' : '-100%')};
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

export const BottomHeader = styled.div`
  height: 40px;
  cursor: grab;
  user-select: none;
`;

export const HandleBar = styled.div`
  width: 58px;
  height: 4px;
  background: #dfdfdf;
  margin: 0 auto;
`;

export const SheetContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 16px;
  padding: 12px 24px 24px 24px;
`;

export const SheetContent = styled.div`
  font-size: 20px;
  width: 100%;
`;

export const DrawerContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
