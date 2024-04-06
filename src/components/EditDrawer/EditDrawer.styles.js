import styled from 'styled-components';
const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 22.15px;
  padding-bottom: 22.15px;
  border-bottom: 1px #f5f5f5 solid;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const ItemText = styled.div`
  color: ${(props) => props.color || '#000'};
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

export { ItemWrapper, ItemText };
