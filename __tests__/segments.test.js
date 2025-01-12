// __tests__/segments.test.js
import {
  makeDecartPoint,
  makeSegment,
  getMidpointOfSegment,
  getBeginPoint,
  getEndPoint,
} from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the function makeDecartPoint", () => {
  test("with correct values", () => {
    expect(makeDecartPoint(3, 2)).toEqual({ x: 3, y: 2 });
  });
  test("with negative values", () => {
    expect(makeDecartPoint(-3, -2)).toEqual({ x: -3, y: -2 });
  });
  test("with larger values", () => {
    expect(makeDecartPoint(3050, 100)).toEqual({ x: 3050, y: 100 });
  });
  test("with 0 values", () => {
    expect(makeDecartPoint(0, 0)).toEqual({ x: 0, y: 0 });
  });
});
describe("Testing the function makeSegment", () => {
  test("with correct values", () => {
    const beginPoint = makeDecartPoint(3, 2);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(segment.beginPoint).toEqual({ x: 3, y: 2 });
    expect(segment.endPoint).toEqual({ x: 0, y: 0 });
    expect(segment.calculateDistance()).toBeCloseTo(3.61, 2);
  });
  test("with negative values", () => {
    const beginPoint = makeDecartPoint(-3, -2);
    const endPoint = makeDecartPoint(-1, -5);
    const segment = makeSegment(beginPoint, endPoint);
    expect(segment.beginPoint).toEqual({ x: -3, y: -2 });
    expect(segment.endPoint).toEqual({ x: -1, y: -5 });
    expect(segment.calculateDistance()).toBeCloseTo(3.61, 2);
  });
  test("with 0 values", () => {
    const beginPoint = makeDecartPoint(0, 0);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(segment.beginPoint).toEqual({ x: 0, y: 0 });
    expect(segment.endPoint).toEqual({ x: 0, y: 0 });
    expect(segment.calculateDistance()).toBe(0);
  });
  test("with invalid arguments", () => {
    const beginPoint = makeDecartPoint(-3, "a");
    const endPoint = makeDecartPoint(null);
    expect(() => makeSegment(beginPoint, endPoint)).toThrow(
      "Both points must be objects!",
    );
  });
});
describe("Testing the function getMidpointOfSegment", () => {
  test("with correct values", () => {
    const beginPoint = makeDecartPoint(3, 2);
    const endPoint = makeDecartPoint(4, 7);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: 3.5, y: 4.5 });
  });
  test("with 0 values", () => {
    const beginPoint = makeDecartPoint(0, 0);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: 0, y: 0 });
  });
  test("with negative and positive coordinates", () => {
    const beginPoint = makeDecartPoint(-5, -6);
    const endPoint = makeDecartPoint(2, 1);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: -1.5, y: -2.5 });
  });
  test("with negative coordinates", () => {
    const beginPoint = makeDecartPoint(-5, -6);
    const endPoint = makeDecartPoint(-2, -1);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: -3.5, y: -3.5 });
  });
  test("with larger values", () => {
    const beginPoint = makeDecartPoint(2210, 2210);
    const endPoint = makeDecartPoint(3500, 444);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getMidpointOfSegment(segment)).toEqual({ x: 2855, y: 1327 });
  });
});
describe("Testing the function getBeginPoint", () => {
  test("with correct values", () => {
    const beginPoint = makeDecartPoint(3, 2);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: 3, y: 2 });
  });
  test("with negative values", () => {
    const beginPoint = makeDecartPoint(-3, -2);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: -3, y: -2 });
  });
  test("with 0 values", () => {
    const beginPoint = makeDecartPoint(0, 0);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: 0, y: 0 });
  });
  test("with negative and positive coordinates", () => {
    const beginPoint = makeDecartPoint(-3, 2);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: -3, y: 2 });
  });
  test("with larger values", () => {
    const beginPoint = makeDecartPoint(-3540, 2000);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getBeginPoint(segment)).toEqual({ x: -3540, y: 2000 });
  });
});
describe("Testing the function getEndPoint", () => {
  test("with correct values", () => {
    const beginPoint = makeDecartPoint(3, 2);
    const endPoint = makeDecartPoint(6, 4);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 6, y: 4 });
  });
  test("with negative values", () => {
    const beginPoint = makeDecartPoint(-3, -2);
    const endPoint = makeDecartPoint(-5, -3);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: -5, y: -3 });
  });
  test("with 0 values", () => {
    const beginPoint = makeDecartPoint(0, 0);
    const endPoint = makeDecartPoint(0, 0);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 0, y: 0 });
  });
  test("with negative and positive coordinates", () => {
    const beginPoint = makeDecartPoint(-3, 2);
    const endPoint = makeDecartPoint(4, -7);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 4, y: -7 });
  });
  test("with larger values", () => {
    const beginPoint = makeDecartPoint(-3, 2);
    const endPoint = makeDecartPoint(4000, -750);
    const segment = makeSegment(beginPoint, endPoint);
    expect(getEndPoint(segment)).toEqual({ x: 4000, y: -750 });
  });
});
