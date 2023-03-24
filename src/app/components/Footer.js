"use client";
import React from "react";
import "primeicons/primeicons.css";
import "./Footer.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { Button } from "primereact/button";

const Footer = () => {
  return (
    <>
      <div className="footer flex md:flex-auto ">
        <div className="flex gap-4 align-self-center ">
          <Button label="About Us" severity="success" />

          <Button label="Contact" severity="success" />
          <Button label="Terms Of Use" severity="success" />
        </div>
        <div className="align-content-end  flex gap-4 align-self-center">
          <i className="pi pi-facebook iconStyle" />
          <i className="pi pi-instagram iconStyle" />
          <i className="pi pi-twitter iconStyle" />
        </div>
      </div>
    </>
  );
};

export default Footer;
