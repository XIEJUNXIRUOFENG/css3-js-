window.onload=function(){
	function GetRandomNum(Min,Max) {
		var Range = Max - Min;
		var Rand = Math.random();
		return(Min + Math.round(Rand * Range));
		}

	var timeEnd = function () {
		var parent=document.getElementById("box-wide");
		var child=document.getElementById("barrage");
		parent.removeChild(child);
	}

	document.onkeyup = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==13){ // enter 键
            var para = document.createElement("div");
            var content = document.querySelector("#input-content").value;
            var node = document.createTextNode(content);
            para.appendChild(node);
            para.setAttribute("Id","barrage");
            var element = document.querySelector("#box-wide");
            element.appendChild(para);

            var high = 0;
            high = GetRandomNum(0,400);
            para.style.marginTop = high + "px";
            setTimeout(timeEnd,5000);
        }
	}

}