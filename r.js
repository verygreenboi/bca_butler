const q = require('q'),
      request = require('request');

const service = {};

service.post = returnPostRequest;
service.get = returnGetRequest;
service.put = returnPutRequest;
service.delete = returnDeleteRequest;

module.exports = service;

function returnGetRequest(options) {
	var deferred = q.defer();
  request.get(options, function (error, response, body){
    if (error) {
      deferred.reject(error);
    }
    if (response.body) {
        deferred.resolve(response.body);
    } else {
      deferred.resolve();
    }
  });
  return deferred.promise;
}

function returnPostRequest(options) {
  var deferred = q.defer();
  request.post(options, function (error, response, body){
    if (error) {
        deferred.reject(error);
    }
    if (response.body) {
        deferred.resolve(response.body);
    } else {
        deferred.resolve();
    }
  });
  return deferred.promise;
}

function returnPutRequest(options) {
  var deferred = q.defer();
  request.put(options, function (error, response, body){
    if (error) {
        deferred.reject(error);
    }
    if (response.body) {
        deferred.resolve(response.body);
    } else {
        deferred.resolve();
    }
  });
  return deferred.promise;
}

function returnDeleteRequest(options) {
  var deferred = q.defer();
  request.delete(options, function (error, response, body){
    if (error) {
        deferred.reject(error);
    }
    if (response.body) {
        deferred.resolve(response.body);
    } else {
        deferred.resolve();
    }
  });
  return deferred.promise;
}
