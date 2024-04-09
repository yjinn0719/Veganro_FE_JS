import React, { useState } from 'react';
import { DateTagBtn, DateTagContent } from './DateTag.styles';

function DateTag({ title }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <DateTagBtn onClick={handleClick} clicked={isClicked ? 1 : 0}>
      <DateTagContent clicked={isClicked ? 1 : 0}>{title}</DateTagContent>
    </DateTagBtn>
  );
}

export default DateTag;
