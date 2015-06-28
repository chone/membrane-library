
goog.provide('mem.vqq.view.dom.LivePlayerDom');

goog.require('goog.Disposable');
goog.require('mem.view.DomView');

goog.scope(function() {

  var _ = mem.vqq.view.dom;

  /**
   * @param {Element} element
   * @param {string} id
   * @constructor
   * @extends {goog.Disposable}
   * @implements {mem.view.DomView}
   */
  _.LivePlayerDom = function(element, id) {
    _.LivePlayerDom.base(this, 'constructor');

    /**
     * @type {Element}
     * @protected
     */
    this.element = element;

    /**
     * @type {string}
     * @protected
     */
    this.id = id;
  };
  goog.inherits(_.LivePlayerView, goog.Disposable);

  /**
   * @param {Element}
   * @return {mem.vqq.view.dom.LivePlayerDom}
   * @static
   */
  _.LivePlayerDom.of = function(element) {
    return new _.LivePlayerDom(element, element.getAttribute('id'));
  };

  /**
   * @param {string} channelId 
   */
  _.LivePlayerDom.prototype.setVideo = function(channelId) {
  };

  /** @override */
  _.LivePlayerDom.prototype.getElement = function() {
    return this.element;
  };

});
