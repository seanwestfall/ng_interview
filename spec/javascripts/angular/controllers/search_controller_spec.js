/* globals describe, inject, expect, module, sinon */

describe('SearchController', function () {
  'use strict';

  beforeEach(module('app'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  // query test
  it('query should return a list', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });
  // clear query test
  it('query should return a list', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

  // select Movie test
  it('selectMovie should set the movie resource', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

  // openSlider tese
  /*beforeEach(function() {
  });*/

  /*afterEach(function() {
  });*/

  // open test
  it('should set the menu css', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

  // close test
  it('should set the menu css to close', function() {
    //expect(document.getElementById('result').innerHTML).toBe('3');
  });

});
