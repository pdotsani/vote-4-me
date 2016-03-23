/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/polls              ->  index
 * POST    /api/polls              ->  create
 * GET     /api/polls/:id          ->  show
 * PUT     /api/polls/:id          ->  update
 * DELETE  /api/polls/:id          ->  destroy
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.index = index;
exports.filter = filter;
exports.show = show;
exports.create = create;
exports.update = update;
exports.vote = vote;
exports.destroy = destroy;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pollModel = require('./poll.model');

var _pollModel2 = _interopRequireDefault(_pollModel);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _lodash2['default'].merge(entity, updates);
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Polls

function index(req, res) {
  return _pollModel2['default'].find().exec().then(respondWithResult(res))['catch'](handleError(res));
}

// Gets a list of polls created by the current user

function filter(req, res) {
  return _pollModel2['default'].find({ owner: _mongoose2['default'].Types.ObjectId(req.params.id) }).exec().then(handleEntityNotFound(res)).then(respondWithResult(res))['catch'](handleError(res));
}

// Gets a single Poll from the DB

function show(req, res) {
  return _pollModel2['default'].findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res))['catch'](handleError(res));
}

// Creates a new Poll in the DB

function create(req, res) {
  console.log('In server: ', req.body);
  return _pollModel2['default'].create(req.body).then(respondWithResult(res, 201))['catch'](handleError(res));
}

// Updates an existing Poll in the DB

function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _pollModel2['default'].findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res))['catch'](handleError(res));
}

function vote(req, res) {
  var aVote = req.body.vote;
  _pollModel2['default'].findById(req.params.id).exec().then(handleEntityNotFound(res)).then(function (poll) {
    var update = poll;
    update.responses.forEach(function (response) {
      if (aVote === response.response) response.count++;
    });
    update.save().then(respondWithResult(res))['catch'](handleError(res));
  })['catch'](handleError(res));
}

// Deletes a Poll from the DB

function destroy(req, res) {
  return _pollModel2['default'].findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res))['catch'](handleError(res));
}
//# sourceMappingURL=poll.controller.js.map
