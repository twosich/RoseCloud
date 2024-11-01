import { EventEmitter } from 'node:events';

const emisorFiles = new EventEmitter();

emisorFiles.on('upload', (size: Number) => {
    console.log(`Upload File, Size: ${size}mb`); 
});

emisorFiles.emit('upload', 500);