
goog.provide('mem.vqq.live');

goog.require('goog.net.jsloader');

goog.scope(function() {

  var _ = mem.vqq.live;

  var jsloader = goog.net.jsloader;

  _.render = function(id, channel, callback, width) {
    var tvp = window['tvp'];
    if (!tvp) {
      _.loadTvpScript(function() {
	callback(_.createPlayer(tvp, ))
      });
    } else {

    }
  };

  _.createPlayer = function(tvp, id, channel, width, height) {
    var model = new tvp['VideoInfo']();  
    model['setChannelId'](channel);
    var player = new tvp['Player'](); 
    player['create']({
      'width': width || '100%',
      'height': height || '100%',
      'type': 1,
      'video': model,
      'modId': id,
      'autoplay': true
    });
    return player;
  };

  _.loadTvpScript = function(callback) {
    var tvpUrl = 'http://imgcache.gtimg.cn/tencentvideo_v1/'
      + 'tvp/js/tvp.player_v2_live.js';
    var defer = jsloader.load(tvpUrl);
    defer.addCallback(function() {
      var tvp = window['tvp'];
      if (tvp) {
	callback({
	  tvp: tvp
	});
      } else {
	callback({
	  exception: true
	});
      }
    }).addErrorback(function() {
	callback({
	  exception: true
	});
    });
  };

});
