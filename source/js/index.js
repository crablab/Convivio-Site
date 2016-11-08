"use strict";

var autosize = require('autosize');
var inputFocusLabel = require('./input-focus-label');

inputFocusLabel(document.querySelectorAll('.text-input'));
autosize(document.querySelectorAll('textarea'));
