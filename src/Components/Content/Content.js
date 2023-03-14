import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../Images/logo.png";
import Neft from "../Images/neft.jpg";
import analitic from "../Images/analitic.jpg";
import Healt from "../Images/Healt.jpg";
import Buss from "../Images/Buss.jpg";
import Neyro from "../Images/Neyro.jpg";
import Parabola from "../Images/Parabola.jpg";

class Content extends Component {
  render() {
    return (
      <Box
        mt={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"30px"}
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
          Industries
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <img src={logo} alt="" />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Neft} alt="" />
            <Box position={"absolute"} zIndex={"10"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Releway",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "rgba(247, 247, 247, 1)",
                }}
              >
                Energy
              </Typography>
            </Box>
          </Box>
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={analitic} alt="" />
            <Box position={"absolute"} zIndex={"10"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Releway",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "rgba(247, 247, 247, 1)",
                }}
              >
                Financial Services
              </Typography>
            </Box>
          </Box>
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Healt} alt="" />
            <Box position={"absolute"} zIndex={"10"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Releway",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "rgba(247, 247, 247, 1)",
                }}
              >
                Healthcare
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          mt={"20px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Buss} alt="" />
            <Box position={"absolute"} zIndex={"10"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Releway",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "rgba(247, 247, 247, 1)",
                }}
              >
                Infrastructure
              </Typography>
            </Box>
          </Box>
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Neyro} alt="" />
            <Box position={"absolute"} zIndex={"10"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Releway",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "rgba(247, 247, 247, 1)",
                }}
              >
                Manufacturing Supply Chain
              </Typography>
            </Box>
          </Box>
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Parabola} alt="" />
            <Box position={"absolute"} zIndex={"10"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Releway",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "48px",
                  textAlign: "center",
                  color: "rgba(247, 247, 247, 1)",
                }}
              >
                Tech, Media & Telecom (TMT)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Content;
