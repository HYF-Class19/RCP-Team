'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Join } from './Join';
import { Login } from './Login'

import AccountHeader from '../../../public/assets/Rectangle-account.png';

export default function account() {

    return (
        <>
            <div className='flex flex-column '>
                <h2 className='m-6'>
                <Link href="../../">Home</Link> {'>'} Account
                </h2>
                <div className='flex justify-content-center'>
                <Image
                className="flex align-items-center justify-content-center border-round-lg m-4"
                src={AccountHeader}
                alt="account header banner"
                />
                </div>
        </div>
            <div className='flex flex-wrap justify-content-center gap-7 pb-8 pt-6'>
            <Join />
            <Login />
            </div>
        </>
    );
}
