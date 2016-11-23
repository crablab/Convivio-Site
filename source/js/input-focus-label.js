var bean = require('bean');
var addClass = require('add-class');
var removeClass = require('remove-class');

module.exports = function(elements) {
  Array.prototype.forEach.call(elements, function(element, i){
    bean.on(element, {
      focus: function(e){
        var id = this.id;
        var label = document.querySelectorAll('label[for="' + id + '"]');
        addClass(label, 'is-focused');
      },
      blur: function(e){
        var id = this.id;
        var label = document.querySelectorAll('label[for="' + id + '"]');
        removeClass(label, 'is-focused');
      }
    });
  });
};
