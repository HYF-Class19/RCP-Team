'use client';
import { Splitter, SplitterPanel } from 'primereact/splitter';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Join } from './Join';
import { Login } from './Login'
import { Footer } from '../components/Footer';

export default function account() {

    return (
        <>
            <Header />
            <NavBar />
            <div className='flex justify-content-center m-5'>
            <Join />
            <Login />
            </div>
            <Footer />
        </>
    );
}
