/**
 * Concern soal double execution
 * @param {Object} generator 
 * @returns {String}
 */
export function whichSideRender(counter) {
    const { value } = counter.next()
    if (value > 1) return "CLIENT_SIDE"
    else return "SERVER_SIDE"
}