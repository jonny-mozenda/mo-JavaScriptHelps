//Table Formatting
function parse(object, node)
{
for (x in object)
{
	var tr = document.createElement("TR");
	tr.setAttribute("type",typeof object[x]);
	tr.setAttribute("class",x);
	var td1 = document.createElement("TD");
	td1.setAttribute("class","name");
	td1.textContent = x;
	tr.appendChild(td1);
	node.appendChild(tr);
	if (typeof object[x] == 'object')
	{
		var table = document.createElement("TABLE");
		var tbody = document.createElement("TBODY");
		table.appendChild(tbody);
		table.setAttribute("type","object");
		td1.setAttribute("style", "white-space: pre-wrap;");
		table.setAttribute("class",x);

		parse(object[x],tbody);
		if (table.getElementsByTagName("tr")[0]) {tr.appendChild(table);}
		else{
			var td2 = document.createElement("TD");
			td2.setAttribute("class","value");
			tr.appendChild(td2);
        }
	}
	else
	{
		tr.setAttribute("value",object[x]);
		var td2 = document.createElement("TD");
		td2.setAttribute("class","value");
		td2.innerHTML = object[x];
		tr.appendChild(td2);
		node.appendChild(tr);
	}
}
}

var fileText = document.getElementsByTagName("pre")[0].textContent;
document.open();
document.close();
var object = JSON.parse(fileText);
var table = document.createElement("TABLE");
var tbody = document.createElement("TBODY");
table.appendChild(tbody);
document.body.appendChild(table);
parse(object,tbody);

//CSS styling (IE)
var css = document.createElement('style');
css.setAttribute('type', 'text/css');
css.innerHTML = 'tr {border: 0px} .name {width:10%; border: 1px solid rgba(139, 139, 139, .22); padding-right: 5px; padding-left: 5px;} .value {width:90%; border: 1px solid rgba(139, 139, 139, .22); padding-right: 5px; padding-left: 5px;} table {width: 100%;/*background: rgba(139, 139, 139, .22);*/ border: solid rgba(139, 139, 139, .22); border-width: 10px 5px 10px 10px}';
document.head.appendChild(css);
