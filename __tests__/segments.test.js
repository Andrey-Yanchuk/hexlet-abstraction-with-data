// __tests__/segments.test.js
import { calculateDistance } from "../src/index.js";
/*-----------------------------------------------------*/
describe("Calculate distance between points", () => {
  test("Calculates distance correctly", () => {
    const point1 = [0, 0];
    const point2 = [3, 4];
    expect(calculateDistance(point1, point2)).toBe(5);
  });
  test("Distance between the same points is 0", () => {
    const point = [0, 0];
    expect(calculateDistance(point, point)).toBe(0);
  });
  test("Distance with negative coordinates", () => {
    const point1 = [-3, -4];
    const point2 = [0, 0];
    expect(calculateDistance(point1, point2)).toBe(5);
  });
  test("Distance with larger values", () => {
    const point1 = [456, 100];
    const point2 = [222, 333];
    expect(calculateDistance(point1, point2)).toBeCloseTo(330.22, 2);
  });
  test("Invalid input returns NaN", () => {
    expect(() => calculateDistance([3, 2], "Hi")).toThrow();
    expect(() => calculateDistance([], [1, 1])).toThrow();
  });
});
