function randomItems(id, items)
{
	document.getElementById("ran_".concat(0)).innerHTML = items[Math.floor(Math.random() * items.length)];
}