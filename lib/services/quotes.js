// write a function that gests a random quote from an api.
const request = require ('superagent');

module.exports =( , ) => {
  return request
    .get(`API URL`)
    .then(res => res.body)
    .then(({ quotes }) => quotes);
};
