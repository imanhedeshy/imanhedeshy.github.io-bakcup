const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("public"))


// Serve the static files from the React app

// Serves your app's static files located in 'components' folder
// app.use('/solarsystem', express.static(path.join(__dirname, 'src', 'components', 'SolarSystem')));
// app.use('/journal', express.static(path.join(__dirname, 'src', 'components', 'Journal')));
// app.use('/folderstructureviewer', express.static(path.join(__dirname, 'src', 'components', 'Journal')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
