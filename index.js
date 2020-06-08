//*****Input data to configure grid *****//
		
		//grid data //
		let data =[{"Name": "Shyam",
				"Age": 25
			 },
			 {"Name": "John",
				"Age": 60
			 }
		];
		
		//grid Column config Setting
		let gridColumn = ["Name", "Age"];
		
		//Assuming we are getting data from rest service
		data = formatData(data);
		
		function formatData(data){
			if(data && data.length){
				data = data.map(row => {
					//below logic is a sample and can be customized
					row.Age = (row.Age<50 ? ("Junior : "+row.Age) : ("Senior : "+row.Age));
					return row;
				});
			}
			return data;
		}
		
		function onComponentInitialized(){
			console.log("component initialized");
		}
		
		function onComponentRenderComplete(){
			console.log("component Render Complete");
		}
		
  	   function onRowClick(){
		    alert("Clicked");
	   }