// const { Readable } = require('stream');



// class TestStream extends Readable {

//     constructor(options) {
//         super(options);
//         this.emittedBytes = 0;
//     }
    
//     _read(size) {
//         const chunk = chance.string({ length: size });
//         this.push(chunk, 'utf8');
//         this.emittedBytes += chunk.length;
//         if (chance.bool({ likelihood: 5 })) {
//             this.push(null);
//         }
//     }

// }