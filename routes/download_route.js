const download_router = require('express').Router();
const ytdl = require('ytdl-core');

download_router.get('/', (req, res) => {
    const URL = req.query.URL
    console.log(URL)
    // res.json({
    //     url: URL
    // });
    res.header('Content-Disposition', 'attachment; filename="downloaded.mp4')
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});

module.exports = download_router;