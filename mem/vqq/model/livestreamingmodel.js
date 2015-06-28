
goog.provide('mem.vqq.model.LiveStreamingModel');

goog.require('mem.model.Model');

goog.scope(function() {

  var _ = mem.vqq.model;

  var Model = mem.model.Model;

  /**
   * @param {string} channelId Vqq live streaming channel id.
   * @constructor
   * @extends {mem.model.Model}
   */
  _.LiveStreamingModel = function(channelId) {
    _.LiveStreamingModel.base(this, 'constructor');
    this.channelId_ = channelId; 
  };
  goog.inherits(_.LiveStreamingModel, Model);

  /**
   * Returns current channel id.
   * @return {string}
   */
  _.LiveStramingModel.prototype.getChannelId = function() {
    return this.channelId_;
  };

});
