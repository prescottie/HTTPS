const https = require('https');

function getAndPrintHTML () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (res) => {

    res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => {
    console.log(rawData + chunk + '\n');
  });
  res.on('end', () => {

      console.log('Response stream ended');
  });

  });
}
getAndPrintHTML();
