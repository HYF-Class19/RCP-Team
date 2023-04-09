import './globals.css'

// css import 
import "primereact/resources/themes/saga-green/theme.css";     
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// components import
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

export const metadata = {
  title: 'What can i cook',
  description: 'the best recipe website to find what to cook',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
