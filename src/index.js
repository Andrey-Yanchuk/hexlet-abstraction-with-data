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
// export const makeDecartPoint = (x, y) => ({ x, y });
export const makePolarPoint = (x, y) => {
  // return {x, y} // Переписыываем декартовую систему координат на полярную
  const isValidCoordinate = (x, y) =>
    typeof x === "number" && typeof y === "number" && !isNaN(x) && !isNaN(y);
  if (!isValidCoordinate(x, y)) throw new Error("Coordinates must be numbers!");
  return {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };
};
export const getX = (point) => {
  const x = point.radius * Math.cos(point.angle);
  return Math.round(x);
};
export const getY = (point) => {
  const y = point.radius * Math.sin(point.angle);
  return Math.round(y);
};
export const convertPolarToDecart = (point) => {
  const x = getX(point);
  const y = getY(point);
  return { x, y };
};
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
/*-----------------------------------------------------*/
export const makeRectangle = (point, width = 1, height = 1) => {
  if (width <= 0 || height <= 0)
    throw new Error("Width and height must be greater than 0!");
  return { point, width, height };
};
export const getStartPoint = (rectangle) => {
  if (typeof rectangle.point !== "object")
    throw new Error(
      "Invalid rectangle format: point must be an object with properties x and y!",
    );
  if (Object.keys(rectangle.point).length !== 2)
    throw new Error("The object must contain two properties x and y!");
  return rectangle.point;
};
export const getWidth = (rectangle) => rectangle.width;
export const getHeight = (rectangle) => rectangle.height;
export const containsOrigin = (rectangle) => {
  const { x: x1, y: y1 } = getStartPoint(rectangle);
  const x2 = x1 + getWidth(rectangle);
  const y2 = y1 - getHeight(rectangle);
  return x1 < 0 && 0 < x2 && y1 > 0 && 0 > y2;
  // Зная координаты двух противоположных углов прямоугольника(левая верхняя точка и правая нижняя точка), можно проверить, лежит ли центр координат (0, 0) внутри этого прямоугольника.
  /*
  (x1, y1)*----------------------
          |                     | 
          |                     | 
          |                     | 
          |                     | 
          |                     | 
          ----------------------* (x2, y2)*/
};
/*-----------------------------------------------------*/
export const makeRational = (numer, denom) => {
  if (typeof numer !== "number" || typeof denom !== "number") throw new Error("Both numerator and denominator must be numbers!");
  if (denom === 0) throw new Error("Denominator cannot be zero!");
  const gcd = getGsd(numer, denom);
  return {
    numer: numer / gcd,
    denom: denom / gcd,
  };
};
const getGsd = (a, b) => { // НОД
  while (b !== 0) {
    // [a, b] = [b, a % b] // С деструктуризацией
    const temp = a; // Без деструктуризации
    a = b;
    b = temp % b;
  }
  return Math.abs(a);
};
export const getNumer = (rational) => rational.numer;
export const getDenom = (rational) => rational.denom;
export const add = (rational1, rational2) => {
  // Сложение: numer=numer1×denom2+numer2×denom1, denom=denom1×denom2
  return {
    numer: getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
    denom: getDenom(rational1) * getDenom(rational2),
  };
};
export const sub = (rational1, rational2) => {
  // Вычитание: numer=numer1×denom2−numer2×denom1, denom=denom1×denom2
  return {
    numer: getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
    denom: getDenom(rational1) * getDenom(rational2),
  }
}
export const ratToString = (rational) => `${rational.numer}/${rational.denom}`;
