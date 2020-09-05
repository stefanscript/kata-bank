class Transaction {
    constructor(date, amount) {
        this.date = date;
        this.amount = amount;
    }
    
    getDate() {
        return this.date;
    }
    
    getAmount() {
        return this.amount;
    }
}

export default Transaction;