// __tests__/points.test.js
import {
  makePolarPoint,
  makeSegment,
  getMidpointOfSegment,
  getBeginPoint,
  getEndPoint,
  getX,
  getY,
  convertPolarToDecart,
} from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the function makePolarPoint", () => {
  test("with correctly values", () => {
    expect(makePolarPoint(3, 2)).toEqual({
      angle: 0.5880026035475675,
      radius: 3.605551275463989,
    });
  });
  test("with negative values", () => {
    expect(makePolarPoint(-3, -2)).toEqual({
      angle: -2.5535900500422257,
      radius: 3.605551275463989,
    });
  });
  test("with larger values", () => {
    expect(makePolarPoint(3050, 100)).toEqual({
      angle: 0.03277514440407577,
      radius: 3051.638903933426,
    });
  });
  test("with 0 values", () => {
    expect(makePolarPoint(0, 0)).toEqual({ angle: 0, radius: 0 });
  });
  test("with invalid arguments", () => {
    expect(() => makePolarPoint(-3, "a")).toThrow(
      "Coordinates must be numbers!",
    );
  });
});
describe("Testing the function makeSegment", () => {
  test("with correct values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(segment.beginPoint).toEqual({ x: 3, y: 2 });
    expect(segment.endPoint).toEqual({ x: 0, y: 0 });
    expect(segment.calculateDistance()).toBeCloseTo(3.61, 2);
  });
  test("with negative values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, -2));
    const endPoint = convertPolarToDecart(makePolarPoint(-1, -5));
    const segment = makeSegment(beginPoint, endPoint);
    expect(segment.beginPoint).toEqual({ x: -3, y: -2 });
    expect(segment.endPoint).toEqual({ x: -1, y: -5 });
    expect(segment.calculateDistance()).toBeCloseTo(3.61, 2);
  });
  test("with 0 values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(segment.beginPoint).toEqual({ x: 0, y: 0 });
    expect(segment.endPoint).toEqual({ x: 0, y: 0 });
    expect(segment.calculateDistance()).toBe(0);
  });
  test("with invalid arguments", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, -5));
    const endPoint = { x: null, y: null };
    expect(() => makeSegment(beginPoint, endPoint)).toThrow(
      "Both points must be objects!",
    );
  });
});
describe("Testing the function getMidpointOfSegment", () => {
  test("with correct values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(4, 7));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: 3.5, y: 4.5 });
  });
  test("with 0 values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: 0, y: 0 });
  });
  test("with negative and positive coordinates", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-5, -6));
    const endPoint = convertPolarToDecart(makePolarPoint(2, 1));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: -1.5, y: -2.5 });
  });
  test("with negative coordinates", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-5, -6));
    const endPoint = convertPolarToDecart(makePolarPoint(-2, -1));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: -3.5, y: -3.5 });
  });
  test("with larger values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(2210, 2210));
    const endPoint = convertPolarToDecart(makePolarPoint(3500, 444));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: 2855, y: 1327 });
  });
});
describe("Testing the function getBeginPoint", () => {
  test("with correct values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: 3, y: 2 });
  });
  test("with negative values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, -2));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: -3, y: -2 });
  });
  test("with 0 values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: 0, y: 0 });
  });
  test("with negative and positive coordinates", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: -3, y: 2 });
  });
  test("with larger values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3540, 2000));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: -3540, y: 2000 });
  });
});
describe("Testing the function getEndPoint", () => {
  test("with correct values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(6, 4));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 6, y: 4 });
  });
  test("with negative values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, -2));
    const endPoint = convertPolarToDecart(makePolarPoint(-5, -3));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: -5, y: -3 });
  });
  test("with 0 values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const endPoint = convertPolarToDecart(makePolarPoint(0, 0));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 0, y: 0 });
  });
  test("with negative and positive coordinates", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(4, -7));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 4, y: -7 });
  });
  test("with larger values", () => {
    const beginPoint = convertPolarToDecart(makePolarPoint(-3, 2));
    const endPoint = convertPolarToDecart(makePolarPoint(4000, -750));
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 4000, y: -750 });
  });
});
/*-----------------------------------------------------*/
describe("Testing the function getX", () => {
  test("with correctly values", () => {
    const point = makePolarPoint(3, 2);
    expect(getX(point)).toBe(3);
  });
  test("with negative values", () => {
    const point = makePolarPoint(-3, -2);
    expect(getX(point)).toBe(-3);
  });
  test("with larger values", () => {
    const point = makePolarPoint(3050, 100);
    expect(getX(point)).toBe(3050);
  });
  test("with 0 values", () => {
    const point = makePolarPoint(0, 0);
    expect(getX(point)).toBe(0);
  });
});
describe("Testing the function getY", () => {
  test("with correctly values", () => {
    const point = makePolarPoint(3, 2);
    expect(getY(point)).toBe(2);
  });
  test("with negative values", () => {
    const point = makePolarPoint(-3, -2);
    expect(getY(point)).toBe(-2);
  });
  test("with larger values", () => {
    const point = makePolarPoint(3050, 100);
    expect(getY(point)).toBe(100);
  });
  test("with 0 values", () => {
    const point = makePolarPoint(0, 0);
    expect(getY(point)).toBe(0);
  });
});
