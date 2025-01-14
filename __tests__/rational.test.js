// __tests__/rational.test.js
import { makeRational, getNumer, getDenom, add, sub, ratToString } from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the function makeRational", () => {
    test("with correctly values", () => {
        expect(makeRational(2, 3)).toEqual({ numer: 2, denom: 3 });
    });
    test("with negative values", () => {
        expect(makeRational(-2, -3)).toEqual({ numer: -2, denom: -3 });
    });
    test("with larger values", () => {
        expect(makeRational(100, 125)).toEqual({ numer: 4, denom: 5 });
    });
    test("with 0 values", () => {
        expect(() => makeRational(0, 0)).toThrow("Denominator cannot be zero!");
    });
    test("with non-numeric values", () => {
        expect(() => makeRational('a', null)).toThrow("Both numerator and denominator must be numbers!");
    });
});
describe("Testing the function getNumer", () => {
    test("with correctly values", () => {
        expect(getNumer(makeRational(2, 3))).toBe(2);
    });
    test("with negative values", () => {
        expect(getNumer(makeRational(-2, -3))).toBe(-2);
    });
    test("with larger values", () => {
        expect(getNumer(makeRational(100, 125))).toBe(4);
    });
    test("with 0 values", () => {
        expect(getNumer(makeRational(0, 1))).toBe(0);
    });
    test("with non-numeric values", () => {
        expect(() => getNumer(makeRational('a', null))).toThrow("Both numerator and denominator must be numbers!");
    });
});
describe("Testing the function getDenom", () => {
    test("with correctly values", () => {
        expect(getDenom(makeRational(2, 3))).toBe(3);
    });
    test("with negative values", () => {
        expect(getDenom(makeRational(-2, -3))).toBe(-3);
    });
    test("with larger values", () => {
        expect(getDenom(makeRational(100, 125))).toBe(5);
    });
    test("with 0 values", () => {
        expect(() => getDenom(makeRational(0, 0))).toThrow("Denominator cannot be zero!");
    });
    test("with non-numeric values", () => {
        expect(() => getDenom(makeRational('a', null))).toThrow("Both numerator and denominator must be numbers!");
    });
});
describe("Testing the function add", () => {
    test("with correctly values", () => {
        expect(add(makeRational(2, 3), makeRational(4, 5))).toEqual({ numer: 22, denom: 15 });
    });
    test("with negative values", () => {
        expect(add(makeRational(-2, -3), makeRational(4, 5))).toEqual({ numer: -22, denom: -15 });
    });
    test("with larger values", () => {
        expect(add(makeRational(100, 125), makeRational(2210, 2002))).toEqual({ numer: 733, denom: 385 });
    });
    test("with 0 numer", () => {
        expect(add(makeRational(0, 3), makeRational(0, 5))).toEqual({ numer: 0, denom: 1 }); // При числителе 0 НОД будет всегда 1, а значит и знаменатель будет 1
    });
    test("with 0 denom", () => {
        expect(() => add(makeRational(0, 0), makeRational(0, 0))).toThrow("Denominator cannot be zero!");
    });
    test("with function ratToString", () => {
        expect(ratToString(add(makeRational(2, 3), makeRational(4, 5)))).toBe('22/15');
    });
});
describe("Testing the function add", () => {
    test("with correctly values", () => {
        expect(sub(makeRational(2, 3), makeRational(4, 5))).toEqual({ numer: -2, denom: 15 });
    });
    test("with negative values", () => {
        expect(sub(makeRational(-2, -3), makeRational(4, 5))).toEqual({ numer: 2, denom: -15 });
    });
    test("with larger values", () => {
        expect(sub(makeRational(100, 125), makeRational(2210, 2002))).toEqual({ numer: -117, denom: 385 });
    });
    test("with 0 numer", () => {
        expect(sub(makeRational(0, 3), makeRational(0, 5))).toEqual({ numer: 0, denom: 1 }); // При числителе 0 НОД будет всегда 1, а значит и знаменатель будет 1
    });
    test("with 0 denom", () => {
        expect(() => sub(makeRational(0, 0), makeRational(0, 0))).toThrow("Denominator cannot be zero!");
    });
    test("with function ratToString", () => {
        expect(ratToString(sub(makeRational(2, 3), makeRational(4, 5)))).toBe('-2/15');
    });
});
