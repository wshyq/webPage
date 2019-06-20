 $(function(){
	 
    function login(){
	  $.ajax({
		url:'http://58.16.134.114:8800/main/api/login/login',
		type:'post',
		data:{name:"root",pass:"123456"},
		success:function(json){
			console.log(json);
			if(json.status===0)
			    $('#http').text("登录成功");
			else
			    $('#http').text("error");
		 },error:function(){
		 	 $('#http').text("连接异常");
		   }
	   });
    }
	 
	login();
	function sendInfomation(){
		$.ajax({
			url:'http://58.16.134.114:8800/main/api/ui/safehat/lists',
			type:'post',
			data:{
				dzid:'1',
			},
			dataType:'json',
			xhrFields:{
				withCredentials: true
			},
			success:function(json){
				     display(json);
			}
		});
	}
	
	 function display(json){
		 var dom = "";
         for( var i = 0; i < json.length; i++){
			  var xuhao = i+1;
			  dom = "<tr><td>"+xuhao+"<td>"+json[i].map.info[0].Value +"<td>" + json[i].map.info[1].Value + "<td>" +json[i].map.info[2].Value+"<td>"+json[i].map.info[3].Value+"<td>"+json[i].map.info[4].Value+"<td>"+json[i].map.info[5].Value+"<td>"+json[i].map.info[6].Value+"<td>"+"("+json[i].map.info[7].Value +","+ json[i].map.info[8].Value+")" + "<td>"+" "+json[i].updateDate;
			 $("#list").append(dom);
	    }
		 
		 
    }
	$(document).ready(function() {
       sendInfomation();
	});
});