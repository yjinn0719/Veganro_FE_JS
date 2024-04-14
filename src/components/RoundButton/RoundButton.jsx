import React from 'react';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button } from './RoundButton.style';

function RoundButton({ title, onClick }) {
  const renderIcon = (title) => {
    switch (title) {
      case 'gps':
        return (
          <GpsFixedRoundedIcon
            sx={{
              color: '#383838',
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'menu':
        return (
          <GridViewRoundedIcon
            sx={{
              color: '#383838',
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'main':
        return (
          <HomeRoundedIcon
            sx={{
              color: '#383838',
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'my':
        return (
          <PersonOutlineRoundedIcon
            sx={{
              color: '#383838',
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'addplace':
        return (
          <EmojiFlagsRoundedIcon
            sx={{
              color: '#383838',
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'close':
        return (
          <CloseRoundedIcon
            sx={{
              color: '#383838',
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

export default RoundButton;
