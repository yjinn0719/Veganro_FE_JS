import React from 'react';
import { DateTagBtn, DateTagContent } from './DateTag.styles';

function DateTag({ title, isClicked, onClick }) {
  return (
    <DateTagBtn onClick={onClick} clicked={isClicked ? 1 : 0}>
      <DateTagContent clicked={isClicked ? 1 : 0}>{title}</DateTagContent>
    </DateTagBtn>
  );
}

export default DateTag;
