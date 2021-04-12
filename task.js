const https = require('https');
const fs = require('fs');

// Fetch data from "http://jsonplaceholder.typicode.com/posts" using https module
const postsData = https.get('http://jsonplaceholder.typicode.com/posts');
console.log(JSON.parse(postsData));

// Write data to results/posts.json file using fs module
fs.writeFile('/results/posts.json', postsData, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("data has been written to file");
});
