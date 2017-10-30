"use strict";

var autosize = require('autosize');
var inputFocusLabel = require('./input-focus-label');
var responsiveNav = require('./responsive-nav');
var inPageNav = require('./in-page-nav');

inputFocusLabel(document.querySelectorAll('.text-input'));
autosize(document.querySelectorAll('textarea'));
inPageNav(document.querySelectorAll('a[href^="#"]'));
