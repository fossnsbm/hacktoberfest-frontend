import * as React from "react";
import { Grid } from "@mui/material";
import FOSS from "../../public/logoset.png";
import "./FooterSection.scss";
import { Link } from "react-router-dom";
import { Link as RSLink } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

function FooterSection() {
  return (
    <div className="Footer">
      <div className="Container">
        <Grid container direction="row" style={{ marginTop: "15%" }} >
          <Grid item xs={1}></Grid>
          <Grid item xs={12} md={2}>
            
            <img align="center" style={{width:"70%",marginTop: "15%"}} className="hacknight" src="/hacknight.png" alt="Hack To Night Logo" />       
            </Grid>
          <Grid item xs={12} md={3}>  
            <h2 className="footercont">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries
            </h2>
          </Grid>
          <Grid item xs={12} md={2} align="center" style={{ marginTop: "0.5%" }} >
            <div className="footerNav">
              <span>
                <Link to="/">HOME</Link>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="IntroSection">
                  ABOUT
                </RSLink>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="PrizesSection">
                  LEADER BOARD
                </RSLink>
              </span>
              {/* <span>
                <RSLink activeClass="active" spy smooth to="JudgeSection">
                  JUDGES
                </RSLink>
              </span> */}
              <span>
                <RSLink activeClass="active" spy smooth to="SponsorSection">
                  SPONSORS
                </RSLink>
              </span>
            </div>
          </Grid>

          <Grid item xs={12} md={4} align="center">
            <h4 className="foot" align="center">
              Organized by
            </h4>
            <img align="center" className="FOSS" src={FOSS} alt="FOSS Logo" />
           
          </Grid>
          <Grid item xs={12} align="center" style={{justifyContent:"space-between"}}>
          <div className="socials">
              <a href="https://www.facebook.com/foss.nsbm/">
                <FaFacebook size={18} color={"#fff"} />
              </a>
              <a href="https://twitter.com/fossnsbm">
                <FaTwitter size={18} color={"#fff"} />
              </a>
              <a href="https://www.instagram.com/fossnsbm/">
                <FaInstagram size={18} color={"#fff"} />
              </a>
              <a href="https://www.linkedin.com/company/fossnsbm">
                <FaLinkedin size={18} color={"#fff"} />
              </a>
            </div>
          </Grid>
        </Grid>

        <Grid container direction="row" className="endbr">
          <Grid item xs={12} md={6} className="endbar">
            <p className="endbrtxt">© 2022 FOSS Community of NSBM</p>
          </Grid>
          <Grid item xs={12} md={6} className="endbar">
            <p align="right" className="endbrtxttwo">
              &lt;/&gt; with <FaHeart class="heart" size={18} color={"#fff"} /> by the FOSS Community of NSBM
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default FooterSection;