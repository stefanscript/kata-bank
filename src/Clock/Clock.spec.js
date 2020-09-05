import Clock from "./Clock";

describe("Clock", () => {
    
    it("return today's date as dd/mm/yyyy", () => {
        const clock = new Clock();
        clock.todayAsDate = jest.fn(() => new Date(2020, 8, 5));
        
        const today = clock.today();
        
        expect(today).toEqual("05/09/2020");
    });
})