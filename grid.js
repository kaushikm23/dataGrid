function showDataTable() {
			var dataTable = document.getElementsByTagName("data-grid")[0];
			var gridHeader= JSON.parse(dataTable.getAttribute("column")); 
			var gridData = JSON.parse(dataTable.getAttribute("data"));
			var rowOnClickCallBack = dataTable.getAttribute("onclick");
			onComponentInitialized();
			
			var table = document.createElement("TABLE");
			table.border = "1";
			
            //Get the count of columns.
            var columnCount = gridHeader.length;

            //Add the header row.
            var row = table.insertRow(-1);
            for (var i = 0; i < columnCount; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = gridHeader[i];
                row.appendChild(headerCell);
            }

            //Add the data rows.
				
			  for (var j = 0; j < gridData.length; j++) {
					row = table.insertRow(-1);
					for (var c = 0; c < gridHeader.length; c++) {
				    var cell = row.insertCell(-1);
                    cell.innerHTML = gridData[j][gridHeader[c]];
					//Registering event on row clicked
					if(rowOnClickCallBack)cell.addEventListener("click", window[rowOnClickCallBack]);
                }
			}			          
			
            dataTable.innerHTML = "";
            dataTable.appendChild(table);
			onComponentRenderComplete();
       }
		