import renalFunction  from '../renalFunction';
describe("renal function", () => {
    it('calculates male', () => {
    let male = renalFunction(60, 60, 0.5, false);
    expect(male.toFixed(2)).toBe("133.33");
    });
    it('calculates female', () => {
    let male = renalFunction(60, 60, 0.5, true);
    expect(male.toFixed(2)).toBe("113.33");
    });
});