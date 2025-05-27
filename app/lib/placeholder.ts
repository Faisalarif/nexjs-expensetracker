const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];


const expensed_data = [
      {
        description: 'Groceries at Walmart',
        amount: 150.25,
        category: 'Groceries',
        date: new Date('2025-05-01'),
      },
      {
        description: 'Netflix Subscription',
        amount: 19.99,
        category: 'Entertainment',
        date: new Date('2025-05-02'),
      },
      {
        description: 'Electricity Bill',
        amount: 85.50,
        category: 'Utilities',
        date: new Date('2025-05-03'),
      },
      {
        description: 'Dinner at Italian Bistro',
        amount: 45.75,
        category: 'Dining',
        date: new Date('2025-05-04'),
      },
      {
        description: 'Bus Pass Monthly',
        amount: 50.00,
        category: 'Transport',
        date: new Date('2025-05-05'),
      },
      {
        description: 'Gym Membership',
        amount: 30.00,
        category: 'Health',
        date: new Date('2025-05-06'),
      }
];


export { users, expensed_data };