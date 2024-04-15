class BankAccount{
    constructor(accountNumber,ownerName,balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount) { 
        if (amount <=0 ) throw new Error('Deposit amount must be greater than zero');
        this.balance += amount;  
    };
    
    withdraw(amount) {  
        if (this.canWithdraw(amount)) {
            this.balance -= amount;
            return true;
        } else {
            console.log("Insufficient funds");
            return false;
        }
    };
    
    canWithdraw(amount) {
        return amount <= this.balance;
    }
    displayAccountInfo(){
        this.accountNumber ? console.log(`Account Number: ${this.accountNumber}`) : null;
        this.ownerName ? console.log(`Owner Name: ${this.ownerName}`) : null;
        console.log(`Current Balance: $${this.balance.toFixed(2)}`);
    }
};



const acc1 = new BankAccount("1001", "Md Salim Reza", 1000);
const acc2 = new BankAccount("1102", "Md Sujon Miah", 500);
console.log(`Initial Balance: ${acc1.balance}`); // Outputs Initial Balance: 1000
console.log(`Initial Balance:  ${acc2.balance}`); // Outputs Initial Balance: 500

//  Test the deposit method
try {
    acc1.deposit(-300);
} catch (e) {
    console.error(e.message); // Outputs Deposit amount must be greater than zero
}

acc1.deposit(700);
console.log(`Balance after one deposit: ${acc1.balance}`); // Outputs Balance after one deposit: 1700

// Test the withdraw method
let status = acc2.withdraw(400);
console.log(`Status of first withdrawal: ${status}`); // Outputs Status of first withdrawal: true

status = acc2.withdraw(600);
console.log(`Status of second withdrawal: ${status}`); // Outputs Status of second withdrawal: false

acc1.displayAccountInfo(); // Outputs Account Number: 1001, Owner Name: Md Salim Reza, Current Balance: $1700.00
acc2.displayAccountInfo(); // Outputs Account Number: 1102, Owner Name: Md Sujon Miah, Current Balance: $100

