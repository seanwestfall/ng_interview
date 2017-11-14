/* globals describe, inject, expect, module, sinon */

describe('MovieController', function () {
  'use strict';
  
  beforeEach(module('app'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('setMovieImgUrl', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('setReleaseDateSubstring', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('getCastMembers', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('resizeEvent', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

});
