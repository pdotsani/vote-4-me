'use strict';

var express = require('express');
var controller = require('./poll.controller');

var router = express.Router();

// Add auth to routes
router.get('/', controller.index);
router.get('/:id/myPolls', controller.filter);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/:id/vote', controller.vote);
router.delete('/:id', controller.destroy);

module.exports = router;
