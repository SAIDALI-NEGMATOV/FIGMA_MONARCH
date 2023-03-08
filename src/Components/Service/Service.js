import React, { Component } from "react";
import { Box, Typography,Button } from "@mui/material";
import logo from "../Images/logo.png";
import heands from "../Images/heands.png";
import cep from "../Images/Cap.png";
import plan from "../Images/plan.png";
import Kapital from "../Images/Kapital.png";
import sport from "../Images/sport.png";
import anti from "../Images/anti.png";

class Service extends Component {
  render() {
    return (
      <Box
        padding={"3%"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"30px"}
        sx={{ backgroundColor: "#F7F7F7" }}
      >
        <Typography
          variant="h2"
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
          Our Services
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <img src={logo} alt="" />
        </Box>
        <Box display={"flex"} justifyContent={"center"} gap={"450px"}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box>
              <img src={heands} alt="" />
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Government Relations &
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Stakeholder Engagement
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box>
              <img src={cep} alt="" />
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              New Market Entry &
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Site Location Support
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box>
              <img src={plan} alt="" />
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Secure Supply Chain
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Sourcing & Vetting
            </Typography>
          </Box>
        </Box>
        <Box mt={"20px"} display={"flex"} gap={"450px"}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box>
              <img src={Kapital} alt="" />
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Strategic Advice onn &
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              International Trade
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box>
              <img src={sport} alt="" />
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Business Development
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Support
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box>
              <img src={anti} alt="" />
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Risk Analysis &
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#555555",
              }}
            >
              Strategic Planning
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} >
          <Button sx={{border:'1px solid #F0723E',ml:'10px', background:'#F0723E;',padding:'15px 50px' ,color:'#000',mt:"20px",borderRadius:'30px' }}>LEARN MORE</Button>
        </Box>
      </Box>
    );
  }
}

export default Service;
