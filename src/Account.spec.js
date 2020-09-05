import Account from "./Account";
import TransactionRepository from "./TransactionRepository";
import StatementPrinter from "./StatementPrinter";
import Clock from "./Clock";

jest.mock("./TransactionRepository");
jest.mock("./StatementPrinter");

describe("Account", () => {
  let account;
  let transactionRepository;
  let statementPrinter;
  let clock;

  beforeEach(() => {
    clock = new Clock();
    transactionRepository = new TransactionRepository(clock);
    statementPrinter = new StatementPrinter();
    account = new Account(transactionRepository, statementPrinter);
  });

  it("should make a deposit transaction", () => {
    account.deposit(300);

    expect(transactionRepository.addDeposit).toHaveBeenCalledWith(300);
  });

  it("should make a withdraw transaction", () => {
    account.withdraw(200);

    expect(transactionRepository.addWithdraw).toHaveBeenCalledWith(200);
  });

  it("should print the transaction statement", () => {
    transactionRepository.getAllTransactions.mockImplementation(() => []);
    const transactions = transactionRepository.getAllTransactions();

    account.printStatement();

    expect(statementPrinter.print).toHaveBeenCalledWith(transactions);
  });
});
