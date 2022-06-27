import fs from "fs/promises";


const readFile = await fs.readFile("./latihan_fs/todo.txt");

console.info(readFile.toString());

// const fileReadCallback = (error, data) => {
//     if (error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);
