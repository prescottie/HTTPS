const https = require('https');

function printHTML (html) {
  console.log(html);
}
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

module.exports = function getHTML (options, callback) {

  https.get(options, (res) => {

    res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += (chunk);
    console.log(rawData);
  });

  });
};
