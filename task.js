const https = require("https");
const fs = require("fs");

// Fetch data from "http://jsonplaceholder.typicode.com/posts" using https module
const postsData = https.get('http://jsonplaceholder.typicode.com/posts');

// Write data to results/posts.json file using fs module
