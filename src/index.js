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

