import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function getTotalExpenses() {

    const totalExpPromise = sql `select sum(amount) from expenses`;
    const majorExpPromise = sql `select amount as MajorExpens from expenses order by amount desc limit 1`;
    const topThreeExpPromise = sql `select id, amount, category, description from expenses order by amount desc limit 3`;
    const currentMothExpPromise = sql `select  amount, category, date from expenses where date_trunc('month', date) = date_trunc('month', CURRENT_DATE)`;

    const data = await Promise.all([
      totalExpPromise,
      majorExpPromise,
      topThreeExpPromise,
      currentMothExpPromise
    ]);

    const sumTotlInvoice = data[0][0];
    const majorExpensdata = data[1][0];
    const topThreeExpdata = data[2];
    const currentMothExpdata = data[3];


   return {sumTotlInvoice, majorExpensdata, topThreeExpdata, currentMothExpdata };

}