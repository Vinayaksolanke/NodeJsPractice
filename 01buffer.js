const {Buffer} = require('buffer');// importing Buffer module   

// crating a buuffer for a string
const buf1 = Buffer.from('Hello, Buffer!');
console.log('Buffer from string:', buf1);// thats the binary representation of the string
console.log('String from buffer:', buf1.toString());// converting back to string

// creating a buffer of specific size
const buf2 = Buffer.alloc(10);  
console.log('Allocated buffer:', buf2); // buffer with 10 bytes initialized to 0

// filling the buffer with data
buf2.fill(" a")
console.log('Filled buffer:', buf2.toString()); // converting back to string

// creating a buffer from an array of bytes
const buf3 = Buffer.from([65, 66, 67, 68]);
console.log('Buffer from byte array:', buf3);
console.log('String from byte array buffer:', buf3.toString()); // converting back to string    

// checking the length of a buffer
console.log('Length of buf1:', buf1.length);
console.log('Length of buf2:', buf2.length);
console.log('Length of buf3:', buf3.length);


// concatenating buffers
const buf4 = Buffer.concat([buf1, buf3]);
console.log('Concatenated buffer:', buf4.toString()); // converting back to string

// slicing a buffer
const buf5 = buf4.slice(1, 8);
console.log('Sliced buffer:', buf5.toString()); // converting back to string

// comparing buffers
const comparison = buf3.compare(buf1);
console.log('Buffer comparison result:', comparison); // negative, zero, or positive number

// copying buffers
const buf6 = Buffer.alloc(buf3.length);
buf3.copy(buf6);
console.log('Copied buffer:', buf6.toString()); // converting back to string

// checking if two buffers are equal
const isEqual = buf3.equals(buf6);
console.log('Buffers are equal:', isEqual); // true or false

// writing to a buffer
const buf7 = Buffer.alloc(15);
const bytesWritten = buf7.write('Writing to buffer');
console.log('Bytes written:', bytesWritten);
console.log('Buffer after writing:', buf7.toString()); // converting back to string