let radConst = Math.PI / 180;
/** Converts degrees to radians 
 * @param {number} degrees 
 * @returns {number} */
export let degreesToRadians = (degrees) => { return degrees * radConst; }

let degConst = 180 / Math.PI;
/** Converts radians todegrees
 * @param {number} radians 
 * @returns {number} */
export let radiansTodegrees = (radians) => { return radians * degConst; }

/** Calculates the bounding box width and height of a rotated rectangle
 * @param {number} width width of rectangle
 * @param {number} height height of rectangle
 * @param {number} angle angle of rotation in radians
 * @returns {{width:number,height:number}} */
export let widthAndHeightOfRotatedRectangle = (width, height, angle) => {
    let ct = Math.cos(angle);
    let st = Math.sin(angle);
    let x = -width / 2;
    let y = height / 2;

    if (st > 0) {
        if (ct > 0) {
            return { width: (-x * ct + y * st) - (x * ct + -y * st), height: (-x * st + y * ct) - (x * st + -y * ct) };
        } else {
            return { width: (x * ct + y * st) - (-x * ct + -y * st), height: (-x * st + -y * ct) - (x * st + y * ct) };
        }
    } else {
        if (ct > 0) {
            return { width: (-x * ct + -y * st) - (x * ct + y * st), height: (x * st + y * ct) - (-x * st + -y * ct) };
        } else {
            return { width: (x * ct + -y * st) - (-x * ct + y * st), height: (x * st + -y * ct) - (-x * st + y * ct) };
        }
    }
}