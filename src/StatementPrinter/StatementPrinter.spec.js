import StatementPrinter from "./StatementPrinter";
import Console from "../Console";
import Transaction from "../Transaction/Transaction";

jest.mock("../Console");

describe("StatementPrinter", () => {
    let consoleObj;
    let printer;
    
    beforeEach(() => {
        consoleObj = new Console();
        printer = new StatementPrinter(consoleObj);
    });
    
    it("prints the statement header", () => {
        printer.print([]);
        
        expect(consoleObj.printLine).toHaveBeenCalledWith("Date || Amount || Balance")
    });
    
    it("prints the transactions in chronological order", () => {
        const transactions = [
            new Transaction("10/01/2012", 1000),
            new Transaction("13/01/2012", 2000),
            new Transaction("14/01/2012", -500),
        ];
        
        printer.print(transactions);
    
        expect(consoleObj.printLine).toHaveBeenCalledTimes(4);
        expect(consoleObj.printLine.mock.calls[0][0]).toEqual("Date || Amount || Balance");
        expect(consoleObj.printLine.mock.calls[1][0]).toEqual("14/01/2012 || -500 || 2500")
        expect(consoleObj.printLine.mock.calls[2][0]).toEqual("13/01/2012 || 2000 || 3000")
        expect(consoleObj.printLine.mock.calls[3][0]).toEqual("10/01/2012 || 1000 || 1000")
    });
});