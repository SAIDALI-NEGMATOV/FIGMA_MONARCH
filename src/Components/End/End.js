import React, { Component } from 'react';
import { Box,Typography } from '@mui/material';

class End extends Component {
    render() {
        return (
          <Box width={'100%'} height={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'rgba(77, 77, 77, 1)'}>
            <Typography variant='p' sx={{color:'#fff'}}>2023 © Monarch Global Strategies LLC | Disclaimer</Typography>
          </Box>
        );
    }
}

export default End;
