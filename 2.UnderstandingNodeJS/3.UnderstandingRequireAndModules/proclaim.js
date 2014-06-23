var say= function(message)
{
	console.log('proclaiming: '+ message);
}
exports.softly= say;
exports.loudly= function(message)
{
	console.log("proclaiming: "+ message);
}