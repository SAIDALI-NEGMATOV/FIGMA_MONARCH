/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import nav from "../Images/IMAGE.png";
import { Box, Typography } from "@mui/material";

class Nav extends Component {
  render() {
    return (
      <Box display={"flex"} justifyContent="space-between" alignItems="center" sx={{backgroundColor:'rgba(0, 0, 0, 1)'}}>
        <Box
        width={"90%"} ml="5%"
          margin={"10px"}
          padding={'10px'}
        >
          <img src={nav} alt="" />
        </Box>
        <Box width={'80%'} mr={'10px'} display="flex" justifyContent="center" gap="2vw">
          <Typography variant="p" sx={{color:'rgba(255, 255, 255, 1)'}}>ABOUT US</Typography>
          <Typography variant="p" sx={{color:'rgba(255, 255, 255, 1)'}}>INDUSTRIES</Typography>
          <Typography variant="p" sx={{color:'rgba(255, 255, 255, 1)'}}>OUR TEAM</Typography>
          <Typography variant="p" sx={{color:'rgba(255, 255, 255, 1)'}}>CASE STUDIES</Typography>
          <Typography variant="p" sx={{color:'rgba(255, 255, 255, 1)'}}>NEWS & INSIGHTS</Typography>
          <Typography variant="p" sx={{color:'rgba(255, 255, 255, 1)'}}>CONTACT</Typography>
        </Box>
      </Box>
    );
  }
}

export default Nav;
