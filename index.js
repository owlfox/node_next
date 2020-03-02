const fs = require('fs')
const { exec } = require("child_process");

const path = 'lol.txt'
fs.writeFileSync(path, "lol world")
exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
