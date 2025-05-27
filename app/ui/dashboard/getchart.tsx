'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function GetChart({ currentMonthExpData }) {

    
    return (
        <>
            <div className="">
                <h3>Current Month Expenses</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti facilis esse alias, aliquam hic dolor totam autem soluta voluptas corrupti, ea commodi animi et? Totam sint vero reprehenderit in.</p>
            </div>

            <div className='expensechart'>
                <ResponsiveContainer>
                    <BarChart data={currentMonthExpData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </>
    );
}