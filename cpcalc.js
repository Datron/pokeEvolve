$(document).ready(function () {
  $('#sub').on('click',function(){
var cp = parseFloat(document.getElementById('cp').value);
var h = parseFloat(document.getElementById('h').value);
var w = parseFloat(document.getElementById('w').value);
var cd = parseFloat(document.getElementById('cd').value);
var addr = (h/(w*cd));
var mtp=0; // multiplier that is used to get final cp
	if(cd == 12) // 12 for 12 candies
		{
		 mtp= 1.25 + addr;
		}
	else if(cd == 25)
		{
		 mtp = 1.5 + addr;	
		}
	else if(cd == 50)
		{
			mtp = 2.0 + addr;
		}
	else if(cd == 100)
		{
			mtp = 2.5 + addr;
		}
	else if(cd == 400)
		{
			mtp = 10.0 + addr;
		}
var fcp = cp * mtp;
var minfcp=0;
var maxfcp=0;
if(fcp < 100)
	{
		minfcp = fcp - 12;
		maxfcp = fcp + 12;
	}
else if( fcp > 100 && fcp < 400)
	{
		minfcp = fcp - 50;
		maxfcp = fcp + 50;
		
	}
	else if( fcp >400 && fcp < 600)
		{
			minfcp = fcp - 100;
			maxfcp = fcp + 100;
		}
	else if( fcp > 600)
		{
			minfcp = fcp - 200;
			maxfcp = fcp + 200;
		}
var res = document.getElementById('result');	  
res.innerHTML = '<h4>'+Math.floor(minfcp) + '-' +Math.ceil(maxfcp)+'</h4><br><h4> Predicted Value: '+ Math.ceil(fcp) +'</h4>';
});
});