// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//components
import Layout from "../Layout";
// import VerifyModal from "../Modals/VerifyModal";
// import RegisterHackethon from "./RegisterHackethon";

import "../../css/RegisterPage.css";

const HackethonIdeathonReg = () => {
  return (
    <Layout>
      <Link to="/events/register/hackethon">Hackethon Register</Link>
      {/* <RegisterHackethon /> */}
    </Layout>
  );
};

export default HackethonIdeathonReg;
