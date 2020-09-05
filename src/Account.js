class Account {
    constructor(transactionRepository, statementPrinter) {
        this.transactionRepository = transactionRepository;
        this.statementPrinter = statementPrinter;
    }
    deposit(amount){
        this.transactionRepository.addDeposit(amount);
    }
    withdraw(amount){
        this.transactionRepository.addWithdraw(amount);
    }
    printStatement(){
        const transactions = this.transactionRepository.getAllTransactions();
        this.statementPrinter.print(transactions);
    }
}

export default Account;