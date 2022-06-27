import fs from "fs";

const writeableStream = fs.createWriteStream('.latihan_fs/output.txt');

writeableStream.write("tes 123 123 123 133 \n");
writeableStream.write("tes 453535345345345 \n");
writeableStream.end('end of stream writing');