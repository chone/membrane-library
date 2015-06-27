
goog.provide('mem.vqq.live');

goog.require('goog.net.jsloader');

goog.scope(function() {

  var _ = mem.vqq.live;

  var jsloader = goog.net.jsloader;

  _.render = function() {
  };

  _.loadTvp = function(callback) {
    var tvpUrl = 'http://imgcache.gtimg.cn/tencentvideo_v1/'
      + 'tvp/js/tvp.player_v2_live.js';
    jsloader.load(tvpUrl);
  };

});
