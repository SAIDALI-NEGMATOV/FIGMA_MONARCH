import React, { Component } from "react";
import { Box, Typography,Button } from "@mui/material";
import logo from "../Images/logo.png";
import CHor from '../Images/Chor.jpg'
import Kamp from '../Images/kamp.jpg'
import Geng from '../Images/Geng.jpg'

class News extends Component {
  render() {
    return (
      <Box
        mt={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"30px"}
        bgcolor={'rgba(247, 247, 247, 1)'}
      >
        <Typography
          variant="h2"
          mt={'50px'}
          sx={{
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "34px",
            lineHeight: "48px",
            textAlign: "center",
            color: "#555555",
          }}
        >
          News & Insights
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <img src={logo} alt="" />
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'50px'}>
            <Box bgcolor={'#fffff'} border={'1px solid #DBDBDB'} display={'flex'} justifyContent={'center'} flexDirection={'column'} padding={'20px'}>
                <Box>
                    <img src={CHor} alt="" />
                </Box>
                <Typography
              variant="p"
              mt={'30px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              11 December 2022 | In the News
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
                Michael Camuñez Recognized by <br /> Bloomberg
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
                Monarch President & CEO Michael <br /> Camuñez was named one of the 100...
            </Typography>
            </Box>
            <Box bgcolor={'#fffff'} border={'1px solid #DBDBDB'} display={'flex'} justifyContent={'center'} flexDirection={'column'} padding={'20px'}>
                <Box>
                    <img src={Kamp} alt="" />
                </Box>
                <Typography
              variant="p"
              mt={'25px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              2 November 2022 | In the News
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
                Mexican Trade Shuffle Clouds <br /> Talks to Settle Energy Dispute With U.S.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
                Monarch President & Michael <br /> Camuñez spoke Street Journal...
            </Typography>
            </Box>
            <Box bgcolor={'#fffff'} border={'1px solid #DBDBDB'} display={'flex'} justifyContent={'center'} flexDirection={'column'} padding={'20px'}>
                <Box>
                    <img src={Geng} alt="" />
                </Box>
                <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              11 December 2022 | In the News
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
                Michael Camuñez Recognized by <br /> Bloomberg
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
                Monarch President & CEO Michael <br /> Camuñez was named one of the 100...
            </Typography>
            </Box>
        </Box>
        <Button  sx={{ border:'1px solid #F0723E', background:'#F0723E;',padding:'15px 50px' ,color:'#000',mt:"20px",borderRadius:'30px' }}>LEARN MORE</Button>
        <Box width={'100%'} height={'10px'} bgcolor={'rgba(240, 114, 62, 1)'}></Box>
      </Box>
    );
  }
}

export default News;
