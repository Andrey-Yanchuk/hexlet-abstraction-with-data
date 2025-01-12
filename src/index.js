// src/index.js
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
export const calculateDistance = (point1, point2) => {
  if (!Array.isArray(point1) || !Array.isArray(point2)) {
    throw new Error("Both points must be arrays.");
  }
  if (point1.length !== 2 || point2.length !== 2) {
    throw new Error("Each point must have exactly two coordinates.");
  }
  return Math.sqrt(
    Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2),
  );
};
/*-----------------------------------------------------*/
// Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
export const getMidpoint = (point1, point2) => {
  if (
    typeof point1 !== "object" ||
    point1 === null ||
    typeof point2 !== "object" ||
    point2 === null
  ) {
    throw new Error("Both points must be objects!");
  }
  if (Object.keys(point1).length !== 2 || Object.keys(point2).length !== 2) {
    throw new Error("Each point must have exactly two coordinates.");
  }
  const isValidCoordinate = (point) => {
    return typeof point.x === "number" && typeof point.y === "number";
  };
  if (!isValidCoordinate(point1) || !isValidCoordinate(point2)) {
    throw new Error("Coordinates must be numbers!");
  }
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;
  return { x, y };
};
/*-----------------------------------------------------*/
export const makeDecartPoint = (x, y) => ({ x, y });
// const beginPoint = makeDecartPoint(3, 2);
// const endPoint = makeDecartPoint(0, 0);
export const makeSegment = (beginPoint, endPoint) => {
  if (
    typeof beginPoint !== "object" ||
    beginPoint.x === null ||
    beginPoint.y === null ||
    typeof endPoint !== "object" ||
    endPoint.x === null ||
    endPoint.y === null
  )
    throw new Error("Both points must be objects!");
  if (
    Object.keys(beginPoint).length !== 2 ||
    Object.keys(endPoint).length !== 2
  )
    throw new Error("Each point must have exactly two coordinates.");
  const isValidCoordinate = (point) =>
    typeof point.x === "number" && typeof point.y === "number";
  if (!isValidCoordinate(beginPoint) || !isValidCoordinate(endPoint))
    throw new Error("Coordinates must be numbers!");
  const calculateDistance = () =>
    Math.sqrt(
      Math.pow(beginPoint.x - endPoint.x, 2) +
        Math.pow(beginPoint.y - endPoint.y, 2),
    );
  return { beginPoint, endPoint, calculateDistance };
};
// const segment = makeSegment(beginPoint, endPoint);
export const getMidpointOfSegment = (segment) => {
  const x = (segment.beginPoint.x + segment.endPoint.x) / 2;
  const y = (segment.beginPoint.y + segment.endPoint.y) / 2;
  return { x, y };
};
export const getBeginPoint = (segment) => segment.beginPoint;
export const getEndPoint = (segment) => segment.endPoint;
