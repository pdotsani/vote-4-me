/**
 * Poll model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Poll = require('./poll.model');
var PollEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
PollEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Poll.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    PollEvents.emit(event + ':' + doc._id, doc);
    PollEvents.emit(event, doc);
  };
}

exports['default'] = PollEvents;
module.exports = exports['default'];
//# sourceMappingURL=poll.events.js.map
