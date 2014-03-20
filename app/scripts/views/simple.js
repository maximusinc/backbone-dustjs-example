define(['jquery','backbone','dust'], function($,Backbone,dust){
  var SimpleView = Backbone.View.extend({
  	tmpId: 'simple',
  	initialize: function () {
  		this.compileTmp();
  	},
    render: function () {
    	var self = this;
      	dust.render(this.tmpId, {name:'World'}, function (err, out) {
    		$(self.el).html(out);
    	});
      return this;
    },
    compileTmp: function () {
    	var tmpStr = $('#'+this.tmpId).html(),
    		compiled = dust.compile(tmpStr,this.tmpId);
    	dust.loadSource(compiled);    	
    }
  });

  return SimpleView;
});
