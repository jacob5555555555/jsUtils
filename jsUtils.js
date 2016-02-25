var jsUtils = (function(){
	function loadScript(url, callback) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		
		script.onreadystatechange = callback;
		script.onload = callback;
		
		head.appendChild(script);
	}

	function makeEnum(names){
		var symObj = {};
		names.forEach(function(name){
			symObj[name] = Symbol(name);
		})
		return symObj;
	}
	return {
		loadScript: loadScript,
		makeEnum, makeEnum
	}
})()
