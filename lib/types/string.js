'use strict';

var faker = require('faker');

var random = require('../util/random');

var printable = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789(#$%+-/@[;:<>=?_~^|{}])';

function pick() {
  return printable.substr(random(0, printable.length - 1), 1);
}

module.exports = function(value) {
  if (value.minLength || value.maxLength) {
    var length = random(value),
        sample = '';

    while (length--) {
      sample += pick();
    }

    return sample;
  }

  return faker.lorem.words(random(1, 5)).join(' ');
};