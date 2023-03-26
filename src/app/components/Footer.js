"use client";
import "./Footer.css";
import { Button } from "primereact/button";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="flex gap-4 align-self-center buttons">
        <a href="#">
          <Button label="About Us" className="footerB" />
        </a>

        <a href="#">
          <Button label="Contact" className="footerB" />
        </a>
        <a href="#">
          <Button label="Terms Of Use" className="footerB" />
        </a>
      </div>
      <div className="align-content-end  flex gap-4 align-self-center icons">
        <a href="https://fr-fr.facebook.com/">
          <i className="pi pi-facebook iconStyle" />
        </a>
        <a href="https://www.instagram.com/">
          <i className="pi pi-instagram iconStyle" />
        </a>
        <a href="https://twitter.com/?lang=fr">
          <i className="pi pi-twitter iconStyle" />
        </a>
      </div>
    </div>
  );
};