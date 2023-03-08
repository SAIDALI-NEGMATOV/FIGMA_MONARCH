import React, { Component } from "react";
import { Box, Typography,Button } from "@mui/material";
import { color } from "@mui/system";

class Our extends Component {
  render() {
    return (
      <Box mt={"50px"} padding={'3%'} display='flex' justifyContent={'center'} flexDirection="column">
        <Typography
          variant="h2"
          mb={"50px"}
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
          Our Firm
        </Typography>
        <Typography
          variant="p"
          mt={'50px'}
          sx={{
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "36px",
            textAlign: "center",
            color: "#555555",
          }}
        >
          Monarch Global Strategies (previously ManattJones Global Strategies)
          is a strategic consulting firm with over 20 years of experience
          providing senior corporate executives with market and political
          intelligence, strategic advice and trade and investment support to
          facilitate market entry, business expansion and supply chain
          development efforts globally, with a particular emphasis on North
          America, including Mexico. From our offices in Los Angeles,
          Washington, D.C., Mexico City and Monterrey (Nuevo Leon), our truly
          binational, bicultural and biliterate team has deep regional expertise
          and an invaluable presence on the ground. We have a proven track
          record of success, expert knowledge of the market and regulatory
          environment, and connections at the highest levels of business and
          politics globally. Our chairman, James R. Jones, a former U.S.
          Ambassador to Mexico, and our president and CEO, Michael C. Camuñez, a
          former Assistant Secretary of Commerce and White House Special
          Counsel, have both enjoyed long and distinguished careers in foreign
          policy and regional commercial and government affairs. We also work
          with carefully vetted strategic partners to support your business when
          necessary.
        </Typography>
        <Box display={'flex'} justifyContent="center">
        <Button  sx={{ border:'1px solid #F0723E', background:'#F0723E;',padding:'15px 50px' ,color:'#000',mt:"20px",borderRadius:'30px' }}>LEARN MORE</Button>
        </Box>
      </Box>
    );
  }
}

export default Our;
