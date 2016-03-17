'use strict';

import mongoose from 'mongoose';

var PollSchema = new mongoose.Schema({

  owner: {type: mongoose.Schema.Types.ObjectId, required: true},
	question: {type: String, required: true},

  dateCreated: {type: Date, default: Date.now()},
  active: {type: Boolean, default: true},

	responses: [{
		response: {type: String},
		count: {type: Number, default: 0}
	}]

});

export default mongoose.model('Poll', PollSchema);
