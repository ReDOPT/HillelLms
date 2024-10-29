class BankAccount {

    #Balance;

    constructor(balance) {
        this.#Balance = balance;
    }

    getBalance(){
        return (`Balance:${this.#Balance}`)
    }

    deposit(deposit){
        this.#Balance =this.#Balance + deposit;
    }

    withdraw(withdraw){
        this.#Balance =this.#Balance - withdraw
    }

}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300