const { createReadStream } = require('fs');

let chunkIndex = 0;
const readStream = createReadStream("./data.txt");

readStream.on('open', () => {
  console.log("Started Reading...");
});

readStream.on('end', () => {
  console.log("Completed Reading...");
});

readStream.on('data', chunk => {
  console.log("Chunk: " + ++chunkIndex);
  console.log("-----------------------------------------");
  console.log(chunk);
  console.log("\n");
});

/*
    Started Reading...
  Chunk: 1
  -----------------------------------------
  <Buffer 53 6f 6d 65 20 64 61 74 61>


  Completed Reading...
 */