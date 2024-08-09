
            // example 1

const fs = require('fs');

const filepath = 'text.txt';

// Reads a file in a synchronous and blocking way 
const data = fs.readFileSync(filepath, {encoding: 'utf8'});

// Prints the content of file
console.log(data);

// This section calculates the sum of numbers from 1 to 10
let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}

// Prints the sum
console.log('Sum: ', sum);



          // example2 


          const fs = require('fs');

          const filepath2 = 'text.txt';
          
          // Reads a file in a asynchronous and non-blocking way 
          fs.readFile(filepath2, {encoding: 'utf8'}, (err, data) => {
            // Prints the content of file
            console.log(data);
          });
          
          
          // This section calculates the sum of numbers from 1 to 10
          let sum2 = 0;
          for(let i=1; i<=10; i++){
            sum2 = sum2 + i;
          }
          
          // Prints the sum
          console.log('Sum: ', sum2);
          