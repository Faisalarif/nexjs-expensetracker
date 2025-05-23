import '../app/style/globals.css';
import React from 'react';

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
                            <a href="/">Home</a>
                            <a href="/dashboard">Dashboard</a>
                            <a href="/contact">Contact</a>
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