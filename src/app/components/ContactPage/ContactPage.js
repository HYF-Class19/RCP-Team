'use client';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './ContactPage.css';

import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { ContactBox } from './ContactBox';
import { ContactForm } from './ContactForm';
import { Footer } from '../Footer';




export default function ContactPage() {
  return (
    <>
      <Header />
      <NavBar />
      <ContactBox />
      <ContactForm />
      <Footer />     
    </>
  );
}
