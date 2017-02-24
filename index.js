window.onload=function(){
	var endlisten = function () {
		var tt = document.querySelector('#barrage'); 
		tt.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
			// var parent=document.getElementById("box-wide");
			// var child=document.getElementById("barrage");
			// parent.removeChild(child);
			tt.style.display = "none";
		});
	};

	document.onkeyup = function(evet) {
		var e = event || window.event || arguments.callee.caller.arguments[0];        
            if(e && e.keyCode==13){ // enter 键
            var para = document.createElement("div");
            var content = document.querySelector("#input-content").value;
            var node = document.createTextNode(content);
            para.appendChild(node);
            para.setAttribute("Id","barrage");


            var element = document.querySelector("#box-wide");
            element.appendChild(para);
			endlisten();
            }
	}

}