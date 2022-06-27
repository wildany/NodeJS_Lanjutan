import fs from "fs";

const readableStream = fs.createReadStream('./latihan_fs/todo.txt', { highWaterMark: 10 });

readableStream.on('readable', () => {

    try {
        process.stdout.write(`[${readableStream.read()}]`);

    } catch (error) {
        console.log(error.message);
    }
})

readableStream.on('end', () => {
    console.log('Done');
})