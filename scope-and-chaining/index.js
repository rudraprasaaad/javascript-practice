function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposited ", amount, "Current Balance", balance);
    },
    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insufficient balance");
        return;
      }
      balance = balance - amount;
      console.log("Withdrawn ", amount, "Current Balance", balance);
    },

    checkBalance: () => console.log("Current Balance:", balance),
  };
}

const myAccount = createBankAccount(500);
console.log(myAccount.checkBalance());
console.log(myAccount.deposit(1000));
console.log(myAccount.withdraw(2000));
