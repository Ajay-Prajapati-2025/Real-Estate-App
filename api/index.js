import express from 'express';

const app = express();

// create the server
app.listen(3000, () =>{
    console.log("Server is running on port 3000!");
});