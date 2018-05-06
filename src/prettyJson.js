/**
 * V Pretty JSON
 * 
 * @param {object} d 
 * @returns {string}
 */
const prettyJson = (d) => JSON.stringify(d, null, 2);


module.exports = prettyJson;   
