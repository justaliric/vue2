//用户名匹配
export function nameRule (rule, value, callback) {
	//账号
	let reg = /(^[A-Za-z0-9]{4,10}$)/;
	if (value === '') {
		callback(new Error('请输入用户名称'));
	} else if (!reg.test(value)) {
		callback(new Error('输入4-10位的用户名'));
	} else {
		callback();
	}
}

//密码匹配
export function passRule (rule, value, callback) {
	let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
      if (value === '') {
        callback(new Error('请输入用户密码'));
      } else if (!pass.test(value)) {
        callback(new Error('输入6-12位密码包含大小写字母以及特殊符号'));
      } else {
        callback();
      }
}