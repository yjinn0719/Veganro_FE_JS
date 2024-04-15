import { SpinnerWrapper } from './Spinner.styles';
import { ClockLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <ClockLoader color="#3D642A" />{' '}
    </SpinnerWrapper>
  );
}
