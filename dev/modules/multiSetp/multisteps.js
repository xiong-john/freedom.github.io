

function multisteps(steps, args, callback) {
	var tasks = steps.concat(); //克隆数组

	setTimeout(function () {
		
		//执行下一个任务
		var task = tasks.shift();
		task.apply(null, args || []);

		if(tasks.length > 0) {
			setTimeout(arguments.callee, 25);
		} else {
			if(callback) callback();
		}

	},25);//最好不少于25， 因为再小的延迟可能对UI的更新来说不够用
}


function proessArray(items, process, callback) {
	var todo = items.concat();

	setTimeout(function () {
		var data = todo.shift();
		if(process) {
			process(data);
		}

		if(todo.length > 0) {
			setTimeout(arguments.callee, 25);
		} else {
			if(callback) callback(items);
		}

	}, 25);
}