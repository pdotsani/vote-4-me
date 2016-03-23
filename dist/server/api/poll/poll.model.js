'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var PollSchema = new _mongoose2['default'].Schema({

	owner: { type: _mongoose2['default'].Schema.Types.ObjectId, required: true },
	question: { type: String, required: true },

	dateCreated: { type: Date, 'default': Date.now() },
	active: { type: Boolean, 'default': true },

	responses: [{
		response: { type: String },
		count: { type: Number, 'default': 0 }
	}]

});

exports['default'] = _mongoose2['default'].model('Poll', PollSchema);
module.exports = exports['default'];
//# sourceMappingURL=poll.model.js.map
