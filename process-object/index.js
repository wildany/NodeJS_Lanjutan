const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 1000; i++) {


}

const currentMemoryUsage = process.memoryUsage();

console.info(`Hai, ${yourName}`);
console.info(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage.heapUsed}`);

