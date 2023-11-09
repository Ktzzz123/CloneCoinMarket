import React, { useState } from 'react'
import Banner from './advertisement/Banner'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { Stack } from '@mui/material';
import { Typography } from 'antd';
import TodayCoinBar from './TodayCoinBar';
import { rgbToHex } from 'color-helpers';

export default function AdvertiseBar() {
  const [isShowHighlights, setIsShowHighlights] = useState(true);
  return (
    <>
      <div className='py-6 flex justify-between'>
        <div className='w-1/2'>
          <div className='text-4xl font-bold mb-12 to-black'>Today's Cryptocurrency Prices by Market Cap</div>
          <div style={{color: '#616E85'}}>The global crypto market cap is <span style={{color: rgbToHex(88, 102, 126)}}>$1.33T</span>, <span style={{color: '#16c784'}}>0.80%</span> increase over the last day. <span style={{textDecoration: 'underline', cursor: 'pointer', color:'#808A9D'}}>Read More</span></div>
        </div>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Highlights</Typography>
          <AntSwitch checked={isShowHighlights} onChange={() => setIsShowHighlights(!isShowHighlights)} inputProps={{ 'aria-label': 'ant design' }} />
        </Stack>
      </div>

      {isShowHighlights ?
        <div>
          <TodayCoinBar />
        </div>
        : null}
    </>
  )
}


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 23,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 23,
    height: 23,
    borderRadius: 17,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));