
goog.provide('mem.view.DomView');

goog.scope(function() {

  var _ = mem.view;

  /**
   * @interface
   */
  _.DomView = function() {};

  /**
   * @return {Element}
   */
  _.DomView.prototype.getElement = function() {};

  /**
   * @return {string}
   */
  _.DomView.prototype.getId = function() {};

});
