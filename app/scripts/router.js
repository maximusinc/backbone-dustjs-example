define(['backbone','view','text!data.json'], function(Backbone,SimpleView,jsonData){
  var MainRouter = Backbone.Router.extend({
  	initialize: function () {
  		this.jsonData = JSON.parse(jsonData);
  		this.on('route',this.renderTml)
  	},
  	routes: {
  		"": 'simple',
    	"simple": "simple",
    	"search/:query": "search",
    	"search/:query/p:page": "search"
  	},  	
  	renderTml: function (route) {
  		var data = this.jsonData[route];
  		var view = new SimpleView();
  		view.compileTmp(route);
    	$('#content').html('').append(view.render(data).el);
  	}
  });
  
  return MainRouter;
});
