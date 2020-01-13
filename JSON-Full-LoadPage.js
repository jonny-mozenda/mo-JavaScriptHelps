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
	td1.setAttribute("style", "white-space: pre-wrap;");
	td1.textContent = x;
	tr.appendChild(td1);
	node.appendChild(tr);
	if (typeof object[x] == 'object')
	{
		var table = document.createElement("TABLE");
		var tbody = document.createElement("TBODY");
		table.appendChild(tbody);
		table.setAttribute("type","object");
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
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
	document.body.textContent = "";
	//CSS styling (IE)
	document.head.innerHTML = "";
	var css = document.createElement('style');
	css.setAttribute('type', 'text/css');
	css.innerHTML = 'tr {border: 0px} .name {width:10%; border: 1px solid rgba(139, 139, 139, .22); padding-right: 5px; padding-left: 5px;} .value {width:90%; border: 1px solid rgba(139, 139, 139, .22); padding-right: 5px; padding-left: 5px;} table {width: 100%;/*background: rgba(139, 139, 139, .22);*/ border: solid rgba(139, 139, 139, .22); border-width: 10px 5px 10px 10px}';
	document.head.appendChild(css);
	var object = JSON.parse(xhttp.response);
	var table = document.createElement("TABLE");
	var tbody = document.createElement("TBODY");
	table.appendChild(tbody);
	document.body.appendChild(table);
	parse(object,tbody);
    }
};
xhttp.open("POST", /*Enter URL here*/, true);
xhttp.setRequestHeader(/*Header Name*/, /*Header Value*/);
xhttp.send(/*Enter Post Data Here*/);
