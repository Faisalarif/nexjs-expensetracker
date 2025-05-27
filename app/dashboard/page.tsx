
import { getTotalExpenses } from '../lib/data';
import GetChart  from '../ui/dashboard/getchart';


export default async function Page(){

    const fetchedExpense = await getTotalExpenses();
    const topthreeExp = fetchedExpense.topThreeExpdata;
    const tblData = fetchedExpense.currentMothExpdata; 

    return (

        <>
           <div className="dashboard-cards">

                <div className="dcard">
                    <h3>Total Expenses</h3>
                    <span>${fetchedExpense.sumTotlInvoice.sum}</span>
                </div>
                <div className="dcard">
                    <h3>Major Expense</h3>
                    <span>${fetchedExpense.majorExpensdata.majorexpens}</span>
                </div>

            </div>


             <div className="tbl">
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topthreeExp.map((data, i) => {

                            return(

                                <tr key={i}>
                                    <td>{data.amount}</td>
                                    <td>{data.category}</td>
                                    <td>{data.description}</td>
                                </tr>
                            )

                            })
                        }

                    </tbody>

                </table>
            </div>


            <div className="chart">
                <GetChart currentMonthExpData={tblData} />
            </div>
        </>
         

           
    )
}