window.onload = function () {
	var items = document.querySelector('fa-coffe');
	items.onclick = function () {
		 var x=555;
		items.innerHTML = x;
	}
	} 
	
	var item = document.querySelector('.item-active');
	var timer = new Timers(10, item);
	setInterval(function() {
		timer.tick();
	},1000) 
	timer.tick();
}

function Timers(time, item) {
	this.time = time;
	this.item = item;
	this.tick = function () {
		thi.time--;
		if(this.time < 0) {
			alert("Stop!!!");
		}
		else {
		this.item.innerHTML = this.time;
}
	}

	function rn() {
		items.innerHTML = "fsdf";
	}
}