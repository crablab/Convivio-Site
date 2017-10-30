var animateScrollTo = require('animated-scroll-to');
var bean = require('bean');

module.exports = function(elements) {
  Array.prototype.forEach.call(elements, function(element, i){
    bean.on(element, 'click', function(e) {
      e.preventDefault();
      var scrollTargetId = element.getAttribute('href');
      var scrollTarget = document.querySelector(scrollTargetId);
      console.log(scrollTarget);
      animateScrollTo(scrollTarget);
    });
  });
};

