
	 
	/* function userName() {        //reg1 = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;// 帐号是否合法(字母开头，允许4-16字节，允许字母数字下划线)
        var reg = /^[0-9a-zA-Z_\u3E00-\u9FA5]{3,15}$/;//4-16字节，允许字母数字下划线
        var userName = $("#userName").val();        
		if (userName === "") {
            alert("用户名不能为空");
			return false;
        } else if (!reg.test(userName)) {
           alert("格式不正确");       
		   return false;
        }
		 else{
			return true; 
		 }
    }
	
	 function passWord() {         //reg2 = /^[a-zA-Z]\w{5,17}$/;// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
         //var reg2 = /^[a-zA-Z]\w{5,17}$/;        
		 var reg = /[\u4E00-\u9FA5]/;        
		 var userPwd = $('#passWord').val();        
		 if (userPwd === "") {
			alert("密码不能为空");
            return false;
        } else if (userPwd.length < 6 || userPwd.length > 16) {
            alert("密码长度不符合")            
			return false;
        } else if(reg.test(userPwd)){
            alert("密码不能有中文")
        } else {            
			return true;
        }    
	 */
    
	
	userLogin = function(){
	    var userName = $("#userName").val();        
		if (userName === "") {
            alert("用户名不能为空");
			return false;
		}
		var userPwd = $('#passWord').val();        
		if (userPwd === "") {
			alert("密码不能为空");
            return false;
        } 
	   $.ajax({
		url:'http://58.16.134.114:8800/main/api/login/login',
		type:'post',
		data:{name:$("#userName").val(),pass:$('#passWord').val()},
		success:function(json){
			console.log(json);
			if(json.status===0){
				self.location = "../html/dataList.html";
				
			}
			else{
				alert("用户不存在");
			}  
	    }
      });
	}
	 
	 window.onload = function(){
	   var len = document.getElementsByClassName('input_3');
	   for(var i=0;i< len.length;i++){
		   len[i].onmouseover = function(){
			    this.style.backgroundColor = "#23271F";
			    this.style.color = "#fff";
		   }
		   len[i].onmouseout = function(){
			    this.style.backgroundColor = "#fff";
			    this.style.color = "#23271F";
		   }
	   }
	   var pass = document.getElementById("passWord");
		
	   pass.onfocus = function(){
		  pass.type = "passWord";	
	   }
	}
