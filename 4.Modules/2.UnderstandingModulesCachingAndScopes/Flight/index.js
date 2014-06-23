module.exports= function(info)
{
	var values={
		number:info.number,
		origin:info.origin,
		destination: info.destination
	};
	var functions={
		getInfo:function()
		{
			return values;
		}	
	};

	return functions;
}