import { Wrapper, Title } from './NotFound.styles';
import NotFoundImg from '@/assets/images/not_found.png';

export default function NotFound() {
  return (
    <>
      <Wrapper>
        <img src={NotFoundImg} style={{ width: '130px' }} />
        <Title>요청하신 내용을 찾을 수 없어요 🥲</Title>
      </Wrapper>
    </>
  );
}
