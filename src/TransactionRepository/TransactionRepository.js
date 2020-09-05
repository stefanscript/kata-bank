import Transaction from "../Transaction/Transaction";

class TransactionRepository {
    constructor(clock) {
        this.transactions = [];
        this.clock = clock;
    }
    addDeposit(amount){
        this.transactions.push(new Transaction(this.clock.today(), amount))
    }
    addWithdraw(amount) {
        this.transactions.push(new Transaction(this.clock.today(), -amount));
    }
    getAllTransactions() {
        return [...this.transactions];
    }
}

export default TransactionRepository;