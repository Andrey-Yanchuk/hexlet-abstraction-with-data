// __tests__/rectangle.test.js
import {
  makeRectangle,
  getStartPoint,
  getWidth,
  getHeight,
  containsOrigin,
} from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the function makeRectangle", () => {
  test("with correctly values", () => {
    expect(makeRectangle({ x: 0, y: 1 }, 4, 5)).toEqual({
      point: { x: 0, y: 1 },
      width: 4,
      height: 5,
    });
  });
  test("with negative values", () => {
    expect(() => makeRectangle({ x: 0, y: 1 }, -3, -5)).toThrow(
      "Width and height must be greater than 0!",
    );
  });
  test("with larger values", () => {
    expect(makeRectangle({ x: 10, y: 45 }, 200, 550)).toEqual({
      point: { x: 10, y: 45 },
      width: 200,
      height: 550,
    });
  });
  test("with 0 values", () => {
    expect(() => makeRectangle({ x: 10, y: 45 }, 0, 0)).toThrow(
      "Width and height must be greater than 0!",
    );
  });
});
describe("Testing the function getStartPoint", () => {
  test("with correctly values", () => {
    const rectangle = makeRectangle({ x: 3, y: 2 }, 4, 5);
    expect(getStartPoint(rectangle)).toEqual({ x: 3, y: 2 });
  });
  test("with negative values", () => {
    const rectangle = makeRectangle({ x: -3, y: -2 }, 4, 5);
    expect(getStartPoint(rectangle)).toEqual({ x: -3, y: -2 });
  });
  test("with larger values", () => {
    const rectangle = makeRectangle({ x: 350, y: 1000 }, 4, 5);
    expect(getStartPoint(rectangle)).toEqual({ x: 350, y: 1000 });
  });
  test("with 0 values", () => {
    const rectangle = makeRectangle({ x: 0, y: 0 }, 4, 5);
    expect(getStartPoint(rectangle)).toEqual({ x: 0, y: 0 });
  });
  test("with invalid value type", () => {
    const rectangle = makeRectangle("a", 4, 5);
    expect(() => getStartPoint(rectangle)).toThrow(
      "Invalid rectangle format: point must be an object with properties x and y!",
    );
  });
  test("With invalid object length", () => {
    const rectangle = makeRectangle({ x: 2 }, 4, 5);
    expect(() => getStartPoint(rectangle)).toThrow(
      "The object must contain two properties x and y!",
    );
  });
});
describe("Testing the function getWidth", () => {
  test("with correctly values", () => {
    const rectangle = makeRectangle({ x: 3, y: 2 }, 4, 5);
    expect(getWidth(rectangle)).toBe(4);
  });
  test("with larger values", () => {
    const rectangle = makeRectangle({ x: 350, y: 1000 }, 1250, 500);
    expect(getWidth(rectangle)).toBe(1250);
  });
});
describe("Testing the function getHeight", () => {
  test("with correctly values", () => {
    const rectangle = makeRectangle({ x: 3, y: 2 }, 4, 5);
    expect(getHeight(rectangle)).toBe(5);
  });
  test("with larger values", () => {
    const rectangle = makeRectangle({ x: 350, y: 1000 }, 1250, 500);
    expect(getHeight(rectangle)).toBe(500);
  });
});
describe("Testing the function containsOrigin", () => {
  test("returns false when center of coordinates is on the edge", () => {
    const rectangle = makeRectangle({ x: -1, y: 1 }, 1, 1); // Центр (0, 0) лежит на нижней границе
    expect(containsOrigin(rectangle)).toBe(false);
  });
  test("returns true for rectangle fully covering the origin", () => {
    const rectangle = makeRectangle({ x: -2, y: 2 }, 4, 4); // Центр внутри
    expect(containsOrigin(rectangle)).toBe(true);
  });
  test("returns false for rectangle with width and height equal to 1", () => {
    const rectangle = makeRectangle({ x: -1, y: 1 }, 1, 1); // Центр не внутри
    expect(containsOrigin(rectangle)).toBe(false);
  });
  test("returns false when rectangle does not include origin", () => {
    const rectangle = makeRectangle({ x: 1, y: 1 }, 2, 2); // Прямоугольник полностью в I квадранте
    expect(containsOrigin(rectangle)).toBe(false);
  });
});
