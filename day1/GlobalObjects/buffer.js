// creating Buffer
let buffer1 = Buffer.from('Hello World');
console.log(buffer1); // it will print <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

// converting buffer to string
console.log(buffer1.toString());

// copying a buffer
let buffer2 = Buffer.from(buffer1);
console.log(buffer2);

// comparing buffers
console.log(buffer1.equals(buffer2)); // will print true because these are same