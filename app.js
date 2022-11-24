const fs = require('node:fs');

fs.readdir('./boys', (err, files) => {

    for (const file of files) {

        fs.stat(`./boys/${file}`,(err1, stats) => {
            console.log(`./boys/${file}`);

            if (stats.isFile()){

                fs.readFile(`./boys/${file}`, (err, data) => {
                    console.log(`./boys/${file}`);

                    for (const dataKey in data) {

                        if (data[dataKey]==="female"){
                            fs.unlink(`./boys`)
                        }
                    }
                });
            }
        })
    }
});
