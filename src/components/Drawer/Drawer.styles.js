import styled from 'styled-components';
import { motion } from 'framer-motion';

const DrawerContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;
const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
`;
const SheetBackground = styled(motion.div)`
  position: fixed;
  bottom: ${({ isOpened }) => (isOpened ? '0' : '-100%')};
  max-width: 480px;
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px 12px 0 0;
  padding: 12px 0 24px 0;
  will-change: bottom;
  transition: bottom 0.5s ease-in-out;
  z-index: 9999;
`;

const BottomHeader = styled.div`
  height: 24px;
  cursor: grab;
  user-select: none;
`;

const HandleBar = styled.div`
  width: 58px;
  height: 3px;
  background: ${(props) => props.theme.color.gray[400]};
  border-radius: 4px;
  margin: 0 auto;
`;

const SheetContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 16px;
  padding: 0 24px 24px 24px;
`;

const SheetContent = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
  BackgroundOverlay,
  SheetBackground,
  BottomHeader,
  HandleBar,
  SheetContentWrapper,
  SheetContent,
  DrawerContainer,
};
