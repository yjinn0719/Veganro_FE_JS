import styled from 'styled-components';
import DistanceNaviIcon from '../../assets/icons/DistanceNaviIcon.svg';

export const CardWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 12px;
  padding: 16px 12px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.color.gray[100]};
  background: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PlaceName = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme.color.gray[800]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  ${(props) => props.theme.media.desktop`
    font-size: 18px;
    margin-right: 8px;
  `}
  ${(props) => props.theme.media.mobile`
    font-size: 14px;
    margin-right: 6px;
  `}
`;
export const VeganMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  gap: 10px;
  border-radius: 4px;
  background: rgba(79, 131, 55, 0.1);
  color: ${(props) => props.theme.color.green[500]};
  font-size: 12px;
  font-weight: 600;
`;

export const DistBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Distance = styled.div`
  color: ${(props) => props.theme.color.gray[600]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.media.desktop`
    font-size: 14px;
  `}
  ${(props) => props.theme.media.mobile`
    font-size: 12px;
  `}
`;
export const Address = styled.p`
  color: ${(props) => props.theme.color.gray[700]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.media.desktop`
    font-size: 14px;
  `}
  ${(props) => props.theme.media.mobile`
    font-size: 12px;
  `}
`;
export const Tel = styled.p`
  color: ${(props) => props.theme.color.gray[700]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.media.desktop`
    font-size: 14px;
  `}
  ${(props) => props.theme.media.mobile`
    font-size: 12px;
  `}
`;
export const CategoryIcon = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.color.gray[500]};
  ${(props) => props.theme.media.desktop`
    width: 54px;
    height: 54px;
  `}
  ${(props) => props.theme.media.mobile`
    width: 44px;
    height: 44px;
  `}
`;

export const CategoryImg = styled.img`
  object-fit: cover;
  ${(props) => props.theme.media.desktop`
    width: 54px;
    height: 54px;
  `}
  ${(props) => props.theme.media.mobile`
    width: 44px;
    height: 44px;
  `}
`;
