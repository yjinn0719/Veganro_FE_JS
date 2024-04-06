import React from 'react';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button } from './RoundButton.style';

function RoundButton(props) {
  const renderIcon = ({ type, color }) => {
    switch (type) {
      case 'gps':
        return (
          <GpsFixedRoundedIcon
            sx={{
              color: `${color ? color : '#383838'}`,
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'menu':
        return (
          <GridViewRoundedIcon
            sx={{
              color: `${color ? color : '#383838'}`,
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'home':
        return (
          <HomeRoundedIcon
            sx={{
              color: `${color ? color : '#383838'}`,
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'mypage':
        return (
          <PersonOutlineRoundedIcon
            sx={{
              color: `${color ? color : '#383838'}`,
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'add-place':
        return (
          <EmojiFlagsRoundedIcon
            sx={{
              color: `${color ? color : '#383838'}`,
              width: '24px',
              height: '24px',
            }}
          />
        );
      case 'close':
        return (
          <CloseRoundedIcon
            sx={{
              color: `${color ? color : '#383838'}`,
              width: '24px',
              height: '24px',
            }}
          />
        );
    }
  };
  return <Button>{renderIcon(props.type)}</Button>;
}

export default RoundButton;
