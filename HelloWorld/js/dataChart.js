
$(function(){
	var chart_HeartRate = new Highcharts.Chart({
		chart:{
			renderTo:'chart_HeartRate',
			type:'spline',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},1000);
				},
			}
		},
		title:{
			text:'心率',
		},
		xAxis:{
			type:'datatime',
			tickPixelInterval:50
		},
		yAxis:{
			max:130,
			min:0
		},
		tooltip:{
			crosshairs:true,
			formattert:function(){
				return '心率'+ Highcharts.dataFormat('%H:%M:%S',this.x)+' '+ Highcharts.numberFormat(this.y,2);
			}
		},
		plotOptions:{
			column:{
				dataLables:{
					enabled:true
				},
				pointPadding:0.2,
				borderWidth:0
			}
		},
		series:[{
			data:1
		}]
		
	});
	var chart_Temperatrue = new Highcharts.Chart({
		chart:{
			renderTo:'chart_Temperatrue',
			type:'spline',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},1000);
				},
			}
		},
		title:{
			text:'环境温度',
		},
		xAxis:{
			type:'datatime',
			tickPixelInterval:50
		},
		yAxis:{
			typr:'temperatrue',
			max:130,
			min:0
		},
		tooltip:{
			crosshairs:true,
			formattert:function(){
				return '心率'+ Highcharts.dataFormat('%H:%M:%S',this.x)+' '+ Highcharts.numberFormat(this.y,2);
			}
		},
		plotOptions:{
			column:{
				dataLables:{
					enabled:true
				},
				pointPadding:0.2,
				borderWidth:0
			}
		},
		series:[{
			data:(function(){
				var data = [];
				var time = (new Date()).getTime();
				var i;
				for( i = 0; i <= 2; i++){
					data.push({
						x:time + i*1000,
					    y:Math.random()*100
					});
				}
				return data;
			})()
		}]
		
	});
	var chart_High = new Highcharts.Chart({
		chart:{
			renderTo:'chart_High',
			type:'spline',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},1000);
				},
			}
		},
		title:{
			text:'海拔高度',
		},
		xAxis:{
			type:'datatime',
			tickPixelInterval:50
		},
		yAxis:{
			max:130,
			min:0
		},
		tooltip:{
			crosshairs:true,
			formattert:function(){
				return '心率'+ Highcharts.dataFormat('%H:%M:%S',this.x)+' '+ Highcharts.numberFormat(this.y,2);
			}
		},
		plotOptions:{
			column:{
				dataLables:{
					enabled:true
				},
				pointPadding:0.2,
				borderWidth:0
			}
		},
		series:[{
			data:(function(){
				var data = [];
				var time = (new Date()).getTime();
				var i;
				for( i = 0; i <= 2; i++){
					data.push({
						x:time + i*1000,
					    y:Math.random()*100
					});
				}
				return data;
			})()
		}]
		
	});
	
	var chart_wink = new Highcharts.Chart({
		chart:{
			renderTo:'chart_wink',
			type:'spline',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},1000);
				},
			}
		},
		title:{
			text:'酒精浓度',
		},
		xAxis:{
			type:'datatime',
			tickPixelInterval:50
		},
		yAxis:{
			max:130,
			min:0
		},
		tooltip:{
			crosshairs:true,
			formattert:function(){
				return '心率'+ Highcharts.dataFormat('%H:%M:%S',this.x)+' '+ Highcharts.numberFormat(this.y,2);
			}
		},
		plotOptions:{
			column:{
				dataLables:{
					enabled:true
				},
				pointPadding:0.2,
				borderWidth:0
			}
		},
		series:[{
			data:(function(){
				var data = [];
				var time = (new Date()).getTime();
				var i;
				for( i = 0; i <= 2; i++){
					data.push({
						x:time + i*1000,
					    y:Math.random()*100
					});
				}
				return data;
			})()
		}]
		
	});
	
	var chart_staus = new Highcharts.Chart({
		chart:{
			renderTo:'chart_staus',
			type:'pie',
			size:'160%',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},5000);
				},
			}
		},
		title:{
			text:'跌倒状态',
		},
		plotOptions:{
			  pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            formatter: function() {
                                        //Highcharts.numberFormat(this.percentage,2)格式化数字，保留2位精度
                                return '<b>'+ this.point.name +'</b>: '+Highcharts.numberFormat(this.percentage,2) +' %';
                             }
                       }
               }
             
		},
		series:[{
			type:'pie',
			size:'160',
			name:null,
			data:[
				{name:'跌倒',color:'#FF0000',y:50},
				{name:'正常',color:'#00FF00',y:50},
			]
		}]
		
	});
	
	var chart_High = new Highcharts.Chart({
		chart:{
			renderTo:'chart_High',
			type:'spline',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},1000);
				},
			}
		},
		title:{
			text:'海拔高度',
		},
		xAxis:{
			type:'datatime',
			tickPixelInterval:50
		},
		yAxis:{
			max:130,
			min:0
		},
		tooltip:{
			crosshairs:true,
			formattert:function(){
				return '心率'+ Highcharts.dataFormat('%H:%M:%S',this.x)+' '+ Highcharts.numberFormat(this.y,2);
			}
		},
		plotOptions:{
			column:{
				dataLables:{
					enabled:true
				},
				pointPadding:0.2,
				borderWidth:0
			}
		},
		series:[{
			data:(function(){
				var data = [];
				var time = (new Date()).getTime();
				var i;
				for( i = 0; i <= 2; i++){
					data.push({
						x:time + i*1000,
					    y:Math.random()*100
					});
				}
				return data;
			})()
		}]
		
	});
	
	
	var chart_HeartRate = new Highcharts.Chart({
		chart:{
			renderTo:'chart_gas',
			type:'spline',
			events:{
				load:function(){
					var series = this.series[0];
					setInterval(function(){
						var x = (new Date()).getTime();
						var y = Math.random()*100;
						series.addPoint([x,y],true,true);
					},1000);
				},
			}
		},
		title:{
			text:'可燃气体浓度',
		},
		xAxis:{
			type:'datatime',
			tickPixelInterval:50
		},
		yAxis:{
			max:130,
			min:0
		},
		tooltip:{
			crosshairs:true,
			formattert:function(){
				return '心率'+ Highcharts.dataFormat('%H:%M:%S',this.x)+' '+ Highcharts.numberFormat(this.y,2);
			}
		},
		plotOptions:{
			column:{
				dataLables:{
					enabled:true
				},
				pointPadding:0.2,
				borderWidth:0
			}
		},
		series:[{
			data:1
		}]
		
	});
	
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
	
	function getForm(){  
       //使用JQuery从后台获取JSON格式的数据  
		
		
       jQuery.getJSON('http://58.16.134.114:8800/main/api/ui/safehat/lists', null, function(json) {  
               //为图表设置值  
		   for(var i = 0; i < json.length; i++){
			   chart_HeartRate.series[1].push(json[i].map.info[2].value); 
		   }
           
		   // chart_HeartRate.series[1].setData(json.map.info[5].value); 
		   //chart_HeartRate.series[1].setData(json.map.info[5].value); 
		   //chart_HeartRate.series[1].setData(json.map.info[5].value); 
		   //chart_HeartRate.series[1].setData(json.map.info[5].value); 
		   //chart_HeartRate.series[1].setData(json.map.info[5].value); 
		   
       });  
    }

	
  
    $(document).ready(function() {  
         //每隔3秒自动调用方法，实现图表的实时更新  
       setInterval(getForm,3000);
	});
});
	         
						
		