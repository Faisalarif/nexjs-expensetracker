import '../app/style/globals.css';
import React from 'react';
import Link from 'next/link'


export default function Rootlayout({
    children,
} : {
    children: React.ReactNode
}) {
    return(
        <html lang="en">
            <body>
                <div className='layout'>
                    <div className='sidebar'>
                       <h2>Sidebar</h2>
                        <nav>
                            <Link href="/">Home</Link>
                            <Link href="/dashboard">Dashboard</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </div>
                    <main className='main-content'>
                        {children}
                    </main>
                </div>

            </body>
        </html>
    )
}