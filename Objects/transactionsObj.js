/**
 * =========================Question 1 =================================
 * group duplicate transactions from the list of transactions where amount, 
 * fromAccount ,toAccount is same and
 *  time difference is less than 1 minute and sort the time
output: [
  [
    {
      transaction_id:"2",
      ...
    },
    {
       transaction_id:"1",
        ...
    }

  ],
  [...]
]


====================Question 2==============================s
 */


const transactions = [
    {
        transaction_id: 1,
        fromAccount: "account1",
        toAccount: "account2",
        amount: 10,
        time: "2020-05-26T05:32:50.097Z",
    },
    {
        transaction_id: 2,
        fromAccount: "account1",
        toAccount: "account2",
        amount: 10,
        time: "2020-05-26T05:44:50.097Z",
    },
    {
        transaction_id: 3,
        fromAccount: "account1",
        toAccount: "account2",
        amount: 10,
        time: "2020-05-26T05:33:45.097Z",
    },
    {
        transaction_id: 4,
        fromAccount: "account2",
        toAccount: "account3",
        amount: 10,
        time: "2020-05-26T05:35:44.097Z",
    },
    {
        transaction_id: 5,
        fromAccount: "account2",
        toAccount: "account3",
        amount: 10,
        time: "2020-05-26T05:35:40.097Z",
    }

];








