// JavaScript Document

//Search string related actions
var __defaultVal = true;
function txtInputEmpty(obj,flag)
{
	if(flag)
	{
		if(obj.value == 'Username' && __defaultVal)
		{
			obj.value = '';
		}
		obj.style.color = '#666666';
		__defaultVal = false;
	}
	else
	{
		if(obj.value == '')
		{
			obj.value = 'Username';
			obj.style.color = '#666666';
			__defaultVal = true;
		}
	}
}

function txtPasswordEmpty(obj,flag)
{
	if(flag)
	{
		if(obj.value == 'Password' && __defaultVal)
		{
			obj.value = '';
		}
		obj.style.color = '#666666';
		__defaultVal = false;
	}
	else
	{
		if(obj.value == '')
		{
			obj.value = 'Password';
			obj.style.color = '#666666';
			__defaultVal = true;
		}
	}
}