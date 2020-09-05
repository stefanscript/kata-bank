import Account from "./Account";
import Console from "./Console";
import TransactionRepository from "./TransactionRepository";
import StatementPrinter from "./StatementPrinter";
import Clock from "./Clock";

jest.mock("./Console");
jest.mock("./Clock");

describe("Account Print Statement", () => {
  let account;
  let consoleObj;
  let transactionRepository;
  let statementPrinter;
  let clock;

  beforeEach(() => {
    clock = new Clock();
    consoleObj = new Console();
    transactionRepository = new TransactionRepository(clock);
    statementPrinter = new StatementPrinter(consoleObj);
    account = new Account(transactionRepository, statementPrinter);

    clock.today.mockReturnValueOnce("10/01/2012");
    clock.today.mockReturnValueOnce("13/01/2012");
    clock.today.mockReturnValueOnce("14/01/2012");
  });

  it("prints all transactions", () => {
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);

    account.printStatement();

    expect(getPrintedLineByIndex(consoleObj, 0)).toEqual(
      "Date || Amount || Balance"
    );
    expect(getPrintedLineByIndex(consoleObj, 1)).toEqual(
      "14/01/2012 || -500 || 2500"
    );
    expect(getPrintedLineByIndex(consoleObj, 2)).toEqual(
      "13/01/2012 || 2000 || 3000"
    );
    expect(getPrintedLineByIndex(consoleObj, 3)).toEqual(
      "10/01/2012 || 1000 || 1000"
    );
  });
});

function getPrintedLineByIndex(consoleObj, index) {
  return consoleObj.printLine.mock.calls[index][0];
}
