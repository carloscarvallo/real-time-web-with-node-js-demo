var events = require('events');
var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function(message){
  console.log('ERR: ' + message);
});

logger.emit('error', 'Spilled Milk');
logger.emit('error', 'Eggs Cracked');
