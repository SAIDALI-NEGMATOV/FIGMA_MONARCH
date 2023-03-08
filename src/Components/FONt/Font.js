import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import bacg from "../Images/IMAGE (2).jpg";


class Font extends Component {
  render() {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          position={"relative"}
          width={"100%"}
          height={"90vh"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <img src={bacg} alt="" width={"100%"} />
          <Box
            position={"absolute"}
            top="30%"
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            flexDirection={"column"}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "Releway",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "58px",
                lineHeight: "72px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              MONARCH GLOBAL STRATEGIES
            </Typography>
            <Typography
              variant="p"
              mt={"5%"}
              sx={{
                fontFamily: "Releway",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "25px",
                lineHeight: "46px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Your trusted advisors for doing business in Mexico and Latin
              America
            </Typography>
            <Typography
              variant="p"
              mt={"10%"}
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "46px",
                textAlign: "center",
                color: "rgba(255, 152, 77, 1)",
              }}
            >
              MONARCH CLIENT ALERT
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "Releway",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "46px",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              All CHIPS on the Table: The HLED Goes “All-in” on Semiconductors and EV Supply Chains
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "46px",
                textAlign: "center",
                color: "rgba(255, 152, 77, 1)",
              }}
            >
              Read more 
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Font;
