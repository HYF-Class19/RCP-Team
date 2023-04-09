'use client';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../page.css';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { ContactBox } from '../components/ContactPage/ContactBox';
import { ContactForm } from '../components/ContactPage/ContactForm';
import { Footer } from '../components/Footer';



export default function Home() {
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
