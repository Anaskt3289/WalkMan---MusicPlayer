const db = require('../DatabaseConfig')

module.exports = {
    addSongs: (details) => {
        console.log(details);
        return new Promise((resolve, reject) => {
            const id = Date.now()
            db.query(`INSERT INTO Songs values(${id},'${details.songName}','${details.dateReleased}','${details.artist}')`).then(() => {
                resolve(id)
            })
        })
    }
} 