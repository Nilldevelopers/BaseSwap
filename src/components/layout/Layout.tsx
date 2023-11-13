import React from 'react';
import dynamic from "next/dynamic";
import { Inter } from 'next/font/google'
type PropsType = {
    children : React.ReactNode ;
    title : string
}
const inter = Inter({ subsets: ['vietnamese'] })
function Layout({children , title} : PropsType) {
    return (
        <>
            <head>
                <title>
                    {title ?? "Swap"}
                </title>
            </head>
            <header className={`w-full border p-2  2xl:container 2xl:mx-auto ${inter.className}`}>
                header
            </header>
            <main className={`w-full border min-h-screen 2xl:container 2xl:mx-auto p-2 ${inter.className}`}>
                {children}
            </main>
        </>
    );
}

export default dynamic(Promise.resolve(Layout),{ssr : false});