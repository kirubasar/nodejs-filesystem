const express = require('express');
const fs = require('fs');

// create express app
const app = express();
// create a route for create file
app.get('/file', (req, res)=>{
    const date = `${new Date().toISOString().replace(/[:.]/g, '-')}`;
    const fileName = `${date}.txt`;
    const timestamp = new Date().getTime();

    fs.writeFile('./createFile/' + fileName, timestamp.toString(), (error)=>{
        if(error){
            console.log(error);
            res.send('error');
        } else {
            console.log('file:', fileName)
            res.send(`File created successfully- ${fileName}`)
        }
    });
    
});

// create a route for retrieve all file in the particular folder
app.get('/getFile', (req, res)=>{
    fs.readdir('./createFile/', (error, files)=>{
        if(error){
            console.log(error);
            res.send('Error reading directory')
        } else {
            const textFiles = files.filter(file => file.endsWith('.txt'));
            res.json(textFiles);
        }
    })
})

// starts a simple http server locally on port 3000
app.listen(3001, () => {
  console.log(`server is running on http://localhost:3001`);
});


