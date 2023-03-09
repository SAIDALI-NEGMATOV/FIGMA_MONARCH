import React, { Component } from "react";
import { Box,Typography,Button} from "@mui/material";
import Mona from "../Images/Monarch.jpg";
import Tivitter from "../Images/Tvitter.png";
import Telegram from "../Images/Telegram.png";
;

class Monarch extends Component {
  render() {
    return (
      <Box bgcolor={"#000000"} display={"flex"} justifyContent={"flex-start"} alignItems={'center'} padding={'50px'} gap={'100px'}>
        <Box>
          <Box border={"none"}>
            <img src={Mona} alt="" />
          </Box>
          <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
            <Box >
              <img src={Tivitter} alt="" />
            </Box>
            <Box>
              <img src={Telegram} alt="" />
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'20px'}>
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
              SITEMAP
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Home
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              About Us
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Our Team
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Case Studies
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              News & Insights
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Contact
            </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} mt={'40px'}>
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
              INDUSTRIES
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Energy
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Financial Services
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Healthcare
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Infrastructure
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Manufacturing & <br /> Supply Chain
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Tech, Media & <br /> Telecom (TMT)
            </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} mt={'-120px'}>
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
             OUR OFFICES
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Washington, D.C.
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Los Angeles
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Mexico City
            </Typography>
        <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Monterrey
            </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} mt={'-73px'}>
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
             NEWSLETTER SIGNUP
            </Typography>
            <Typography
              variant="p"
              mt={'20px'}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
              }}
            >
              Enter information below to join <br /> our mailing list
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'} gap={'10px'}>
               <Box width={'100px'} height={'40px'} overflow={'hidden'} >
                <form action=""><input type="text"  height={"50px"}/></form>
               </Box>
               <Box width={'100px'} height={'40px'} overflow={'hidden'} >
                <form action=""><input type="text"  height={"50px"} /></form>
               </Box>
            </Box>
            <Box mt={'-20px'} bgcolor={'#fff'} height={'25px'} border={'1px solid #fff'}></Box>
            <Box  bgcolor={'#fff'} height={'25px'} border={'1px solid #fff'}></Box>
            <Button  sx={{ border:'1px solid #F0723E', background:'#F0723E;',padding:'10px -10px' ,color:'#fff',mt:"20px",borderRadius:'5px' }}>SIGN UP</Button>
        </Box>
      </Box>
    );
  }
}

export default Monarch;
