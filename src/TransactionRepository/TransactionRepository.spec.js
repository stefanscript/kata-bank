import TransactionRepository from "./TransactionRepository";
import Transaction from "../Transaction/Transaction";
import Clock from "../Clock";

jest.mock("../Clock");

describe("TransactionRepository", () => {
    const TODAY = "05/09/2020";
    let clock;
    let repository;
    
    beforeEach(() => {
        clock = new Clock();
        clock.today.mockImplementation(() => TODAY);
        repository = new TransactionRepository(clock);
    });
    
    it("should store a deposit transaction", () => {
        repository.addDeposit(500);
        
        expect(repository.getAllTransactions().length).toEqual(1);
        expect(repository.getAllTransactions()[0]).toEqual(new Transaction(TODAY, 500));
    });
    
    it("should store a withdraw transaction", () => {
        repository.addWithdraw(400);
        
        expect(repository.getAllTransactions().length).toEqual(1);
        expect(repository.getAllTransactions()[0]).toEqual(new Transaction(TODAY, -400));
    });
})
