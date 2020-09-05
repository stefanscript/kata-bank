class StatementPrinter {
  constructor(consoleObj) {
    this.consoleObj = consoleObj;
  }

  print(transactions) {
    const consoleObj = this.consoleObj;
    this.printHeader(consoleObj);
    this.printTransactions(consoleObj, transactions);
  }

  printHeader(consoleObj) {
    consoleObj.printLine("Date || Amount || Balance");
  }

  printTransactions(consoleObj, transactions) {
    let runningAmount = 0;
    const lines = transactions.map((transaction) => {
      runningAmount = runningAmount + transaction.getAmount();
      return `${transaction.getDate()} || ${transaction.getAmount()} || ${runningAmount}`;
    });
    lines.reverse().forEach((line) => consoleObj.printLine(line));
  }
}
export default StatementPrinter;
