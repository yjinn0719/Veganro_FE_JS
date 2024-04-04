import { useState } from 'react';
import { Wrapper, Input } from './Textfield.style';

const Textfield = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      <Input onChange={onChange} value={text} />
    </Wrapper>
  );
};

export default Textfield;
