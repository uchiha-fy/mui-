mui(function(){
	mui('.mui-bar-tab').on('tap','a',function(){
		location.href=this.href;
	});
});
