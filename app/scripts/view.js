define(['jquery','backbone','dust','dust_helpers'], function($,Backbone,dust){
  var SimpleView = Backbone.View.extend({  	
    render: function (data) {
    	var self = this;
      	dust.render(this.tmpId, data, function (err, out) {
    		$(self.el).html(out);
    	});
      return this;
    },
    compileTmp: function (tmpId) {
      this.tmpId = tmpId;
    	var tmpStr = $('#'+tmpId).html(),
    		compiled = dust.compile(tmpStr,tmpId);
    	dust.loadSource(compiled);    	
    }
  });

  return SimpleView;
});
