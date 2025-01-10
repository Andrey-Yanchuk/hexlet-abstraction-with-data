// __tests__/getMidpoint.test.js
import { getMidpoint } from "../src/index.js";
/*-----------------------------------------------------*/
describe("Calculate the point in the middle", () => {
    test("Calculating the midpoint correctly", () => {
        const point1 = { x: 0, y: 0 };
        const point2 = { x: 4, y: 4 };
        expect(getMidpoint(point1, point2)).toEqual({ x: 2, y: 2 });
    });
    test("The midpoint between two equal points is 0", () => {
        expect(getMidpoint({ x: 0, y: 0 }, { x: 0, y: 0 })).toEqual({ x: 0, y: 0 });
    });
    test("Midpoint with negative and positive coordinates", () => {
        expect(getMidpoint({ x: 3, y: 5 }, { x: -7, y: -1 })).toEqual({ x: -2, y: 2 });
    });
    test("Midpoint with negative coordinates", () => {
        expect(getMidpoint({ x: -3, y: -5 }, { x: -7, y: -1 })).toEqual({ x: -5, y: -3 });
    });
    test("Midpoint with larger values", () => {
        expect(getMidpoint({ x: 2210, y: 2002 }, { x: 3500, y: 444 })).toEqual({ x: 2855, y: 1223 });
    });
    test("Midpoint with invalid arguments", () => {
        expect(() => getMidpoint({ x: '', y: 15 }, { x: -7, y: -1 })).toThrow();
        expect(() => getMidpoint({ x: 10, y: 15 }, {})).toThrow();
    });
});