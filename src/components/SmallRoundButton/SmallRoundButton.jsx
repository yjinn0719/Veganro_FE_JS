import React from 'react';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { Button } from './SmallRoundButton.style';

function SmallRoundButton({ title, onClick }) {
  const renderIcon = (title) => {
    switch (title) {
      case 'refresh':
        return (
          <RefreshRoundedIcon
            sx={{
              color: '#4f4f4f',
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'filter':
        return (
          <FilterListRoundedIcon
            sx={{
              color: '#4f4f4f',
              width: '24px',
              height: '24px',
            }}
          />
        );
      default:
        return null;
    }
  };
  return <Button onClick={onClick}>{renderIcon(title)}</Button>;
}

export default SmallRoundButton;
