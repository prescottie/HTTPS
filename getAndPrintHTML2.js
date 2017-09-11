const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
function getAndPrintHTML (options) {

  https.get(options, (res) => {

    res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += (chunk);
    console.log(rawData);
  });
  res.on('end', () => {

      console.log('Response stream ended');
  });

  });
}
getAndPrintHTML(requestOptions);
