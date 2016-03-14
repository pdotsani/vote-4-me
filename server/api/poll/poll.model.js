'use strict';

import mongoose from 'mongoose';

var PollSchema = new mongoose.Schema({

  owner: {type: mongoose.Schema.Types.ObjectId, required: true},

  list: [{
  	question: {type: String, required: true},
  	dateCreated: {type: Date, required: true, default: Date.now()},
  	active: {type: Boolean, default: true, required: true},

  	responses: [{
  		response: {type: String, required: true},
  		count: {type: Number, default: 0}
  	}]
  }]

});

export default mongoose.model('Poll', PollSchema);
