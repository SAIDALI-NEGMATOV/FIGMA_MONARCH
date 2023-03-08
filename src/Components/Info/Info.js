import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../Images/logo.png";

class Info extends Component {
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
          Case Studies
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <img src={logo} alt="" />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} gap={"300px"}>
          <Box
            gap={"20px"}
            display={"flex"}
            justifyContent="flex-start"
            flexDirection={"column"}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              Featured Case Studies
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              Healthcare
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              Solved regulatory hurdles for <br /> multinational
              biopharmaceutical <br /> company so it could enter the <br />{" "}
              Mexican market
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              Energy
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              Advising U.S. solar energy firm on <br /> market entry and
              providing <br /> government relations and business <br />
              development support
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              Financial Services
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              Positioned global insurance firm to <br /> succeed in
              privatization and <br /> currently provide ongoing <br />
              government relations and market <br /> analytical support
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              SEE MORE CASE STUDIES
            </Typography>
          </Box>
          <Box
            gap={"30px"}
            display={"flex"}
            justifyContent="flex-start"
            flexDirection={"column"}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "30px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              California-Based Multinational Biopharmaceutical Company
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              PROBLEM ENCOUNTERED
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              A large multinational biopharmaceutical company was unable to
              enter the Mexican market due <br /> to a regulation requiring a
              local manufacturing presence in order to sell pharmaceuticals.{" "}
              <br /> Further, Mexico lacked sufficient regulation for domestic
              production of biologic products and <br /> did not permit the
              import of these products.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              SERVICES PROVIDED
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              We helped our client solve both hurdles by working with Mexican
              authorities, including the <br /> Ministry of Economy and COFEPRIS
              (FDA equivalent), to develop appropriate regulatory <br />{" "}
              modifications. In tandem with providing advocacy services, we
              helped the company build <br /> its own in-house government
              relations capabilities.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20px",
                color: "rgba(240, 82, 38, 1)",
              }}
            >
              OUTCOME
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "rgba(85, 85, 85, 1)",
              }}
            >
              Our client was able to register a number of its biologic products
              to successfully enter the <br /> Mexican market, and it remains an
              important participant in the Mexican healthcare market <br /> through
              provision of medications that improve the quality of life for
              Mexican patients and <br /> their families.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Info;
