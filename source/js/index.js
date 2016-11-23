"use strict";

var autosize = require('autosize');
var inputFocusLabel = require('./input-focus-label');
var responsiveNav = require('./responsive-nav');

inputFocusLabel(document.querySelectorAll('.text-input'));
autosize(document.querySelectorAll('textarea'));
