/**Performs a linear conversion using the given values
 * @param {number} xin value to linearize
 * @param {boolean} ends set true to limit linearization to end values
 * @param  {...number} xy numbers to use for linearization first x values then y values*/
export function linearise(xin, ends, ...xy) {
    let len = xy.length / 2;
    if (xin <= xy[0]) {
        if (ends) {
            return xy[len];
        } else {
            let d = (xy[len + 1] - xy[len]) / (xy[1] - xy[0]);
            let b = xin - xy[0];
            return b * d + xy[len];
        }
    } else {
        for (let i = 0; i < len; i++) {
            if (xin <= xy[i + 1]) {
                let d = (xy[len + i + 1] - xy[len + i]) / (xy[i + 1] - xy[i]);
                let b = xin - xy[i];
                return b * d + xy[len + i];
            }
        }
        if (ends) {
            return xy[xy.length - 1];
        } else {
            let d = (xy[xy.length - 1] - xy[xy.length - 2]) / (xy[len - 1] - xy[len - 2]);
            let b = xin - xy[len - 2];
            return b * d + xy[xy.length - 2];
        }
    }
}