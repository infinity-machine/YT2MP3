const express = require('express');
const PORT = process.env.PORT || 6969;
const path = require('path');
const download_router = require('./routes/download_route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client')));
app.use('/download', download_router)

app.listen(PORT, () => console.log(`SERVER SERVING AT PORT ${PORT}`))