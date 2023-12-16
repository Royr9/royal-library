import React from "react";

import "./Logo.css";



type LogoPropsType = {
  customAppSize: "small" | "normal" | "big" | "bigger";
};

export default function Logo({ customAppSize }: LogoPropsType) {


  return (
    <div  className="app-logo">
      <img className={`logo-img ${customAppSize} `} src="/media/images/logo.png" alt="" />
      <h1 className={`logo-content ${customAppSize}`}>Get Your Size</h1>
    </div>
  );
}
