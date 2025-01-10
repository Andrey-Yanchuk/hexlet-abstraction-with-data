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
    return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
};
/*-----------------------------------------------------*/
// Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
export const getMidpoint = (point1, point2) => {
    if (typeof point1 !== "object" || point1 === null || typeof point2 !== "object" || point2 === null) {
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
