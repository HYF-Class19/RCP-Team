"use client";
import "./Footer.css";
import { Button } from "primereact/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="flex gap-4 align-self-center buttons">
        <Link href={{
                pathname: '/components/about',
              }}>
          <Button label="About Us" className="footerB" />
        </Link>

        <a href="/contact">
          <Button label="Contact" className="footerB" />
        </a>
        <Link href={{
                pathname: '/components/terms',
              }}>
          <Button label="Terms Of Use" className="footerB" />
        </Link>
      </div>
      <div className="align-content-end  flex gap-4 align-self-center icons">
        <a href="https://fr-fr.facebook.com/">
          <i className="pi pi-facebook iconStyle"
             style={{ color: 'black', fontSize: '30px' }}
             />
        </a>
        <a href="https://www.instagram.com/">
          <i className="pi pi-instagram iconStyle" 
           style={{ color: 'black', fontSize: '30px' }}
          />
        </a>
        <a href="https://twitter.com/?lang=fr">
          <i className="pi pi-twitter iconStyle"
             style={{ color: 'black', fontSize: '30px' }}
             />
        </a>
      </div>
    </div>
  );
};
