'use strict';

var express = require('express');
var controller = require('./poll.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

// Add auth to routes
router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id/myPolls', auth.isAuthenticated(), controller.filter);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.put('/:id/vote', controller.vote);
router['delete']('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
//# sourceMappingURL=index.js.map
