import React, { Component } from "react";
import { Box, Typography,Button } from "@mui/material";
import logo from "../Images/logo.png";
import Btc from "../Images/btc.jpg";
import Bash from "../Images/Bash.jpg";
import Bashtwo from '../Images/Bashtwo.jpg'
import Bashthree from '../Images/Bashthree.jpg'

class Personaj extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        mt="50px"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"30px"}
        padding={'20px'}
        sx={{
          backgroundImage: `url(${Btc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
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
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Our Team
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <img src={logo} alt="" />
        </Box>
        <Box display={'flex'} gap={'50px'}>
        <Box
          bgcolor={"#fff"}
          padding="30px"
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          gap={"10px"}
        >
          <Box>
            <img src={Bash} alt="" />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "20px",
              textAlign: "center",
              color: "rgba(240, 82, 38, 1)",
            }}
          >
            Michael C. Camuñez
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            President and CEO
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            LA: +1.310.889.0180
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            DC: +1.202.850.0422
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            mcamunez@monarch-global.com
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            Los Angeles / Washington, D.C.
          </Typography>
        </Box>
        <Box
          bgcolor={"#fff"}
          padding="30px"
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          gap={"10px"}
        >
          <Box>
            <img src={Bashtwo} alt="" />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "20px",
              textAlign: "center",
              color: "rgba(240, 82, 38, 1)",
            }}
          >
            James R. Jones
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            Chairman
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            O: +1.202.850.0420
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
           D: +1.202.850.0421
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            jjones@monarch-global.com
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
           Washington, D.C.
          </Typography>
        </Box>
        <Box
          bgcolor={"#fff"}
          padding="30px"
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          gap={"10px"}
        >
          <Box>
            <img src={Bashthree} alt="" />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "20px",
              textAlign: "center",
              color: "rgba(240, 82, 38, 1)",
            }}
          >
            Luis R. Rodríguez
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            Managing Partner
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            O: +52.81.5350.3367
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
           M: +52.1.81.8259.6280
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
            lrodriguez@monarch-global.com
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "30px",
              textAlign: "center",
              color: "rgba(85, 85, 85, 1)",
            }}
          >
           Monterrey
          </Typography>
        </Box>
        </Box>
        <Button  sx={{ border:'1px solid #F0723E', background:'#F0723E;',padding:'15px 50px' ,color:'#000',mt:"20px",borderRadius:'30px' }}>LEARN MORE</Button>
      </Box>
    );
  }
}

export default Personaj;
