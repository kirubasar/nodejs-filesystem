# nodejs-filesystem
This project provides a simple Node.js API to create text files with the current timestamp and retrieve all text files in a specified folder.
 1. create this task using the following technologies:
   - Node.js, Express.js, Nodemon.
   - Tool-Postma, Git, Github.
 2. create an empty directory and open it in vs code.

 3. create a package.json file:
 ````
 npm init
 ````

 4. create an entry point file-index.js

 5. In package.json file-add the following code:
 ````
 "scripts": {
    "start": "node index.js"
 }
 ````
 6. In index.js file, add the following code to connect server
 ````
 const express = require('express');

 const app = express();

 app.get('/', (req, res) => {
    res.send('Hello World');
 });

 app.listen(3001, () => {
  console.log(`server is running on our-url`);
 });
 ````

 5. Update the code to create file and get file from folder.

 6. Add our codes to git repository.

 7. Finally deploy our task to Render.






