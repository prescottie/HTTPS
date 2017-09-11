const https = require('https');

function getAndPrintHTMLChunks () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (res) => {

    res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += (chunk + '\n');
    console.log(rawData);
  });
  res.on('end', () => {

      console.log('Response stream ended');
  });

  });
}
getAndPrintHTMLChunks();
