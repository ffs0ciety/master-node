const assert = require('assert');
const { Readable, Writable, Transform, PassThrough, pipeline } = require('stream');
const fs = require('fs');

const createWritable = () => {
    const sink = [];
    const writable = new Writable({
        write(chunk, enc, callback) {
            sink.push(chunk.toString())
            callback(null, chunk.toString())
        }
    });
    writable.sink = sink;
    return writable;
}

const createTransformable = () => {
    const trans = new Transform({
        transform(chunk, enc, callback) {
            callback(null, chunk.toString().toUpperCase());
        }
    })
    return trans;
}

// const readable = fs.createReadStream('./streams/lorem.txt','utf8');
const writable = createWritable();
const transformable = createTransformable();

// pipeline(readable, transformable, writable, (err) => { 
//   assert.ifError(err);
//   assert.deepStrictEqual(writable.sink, ['A', 'B', 'C']);
//   console.log('passed!');
// });


const readable = fs.createReadStream(
    'streams/lorem.txt', { encoding: 'utf8' });


pipeline(readable, transformable, writable, (err) => {
    console.log(writable.sink);
})