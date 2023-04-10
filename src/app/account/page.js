'use client';

import { Join } from './Join';
import { Login } from './Login'

export default function account() {

    return (
        <>
            <div className='flex justify-content-center m-5'>
            <Join />
            <Login />
            </div>
        </>
    );
}
