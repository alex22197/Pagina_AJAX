



	var urlWeather =
  "https://raw.githubusercontent.com/umpirsky/country-list/master/data/es/country.json";

var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON(urlWeather).then(
  function(data) {
  var select = document.getElementsByClassName('country')[0];
  
  for (var i in data){
  	var opt = document.createElement('option');
  	opt.value=data[i];
  	$(opt).text(data[i]);
	  select.appendChild(opt);
	
  }

}, function(status) {
  alert('Algo fue mal.');
});



/*
	var select = document.getElementsByClassName('country')[0];
	for(let i=0; i<paises.length; i++){
		var opt = document.createElement('option');
		opt.value=paises[i];
		$(opt).text(paises[i]);
		select.appendChild(opt);
	}
 */


 $('.direccion').on('keyup',function() {
	var d =document.getElementsByClassName('direccion')[0].value;

	
	if(d!="" && select.value!=""){
		if(!$("#tarj").length){
			$("#tarjeta").append('<label id="tarj">Tarjeta de credito <input type="text" name="tarjeta"></label>');
		}
		
	}else{
		$("#tarj").remove();
		//j$(".tarjeta").css('display','none');
	}
});
