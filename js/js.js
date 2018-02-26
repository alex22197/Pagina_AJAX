
$(".ok").click(function(){
		$(".cookies_parrafo").hide();

	});


function myFunction() {
    	location.href="formulario/index.html";
	}


var json="https://my-json-server.typicode.com/alex22197/json_Busqueda/viajes";

var peticion = document.getElementById('entrada');

console.log(peticion)


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





	peticion.addEventListener('keyup',mostrar);


function mostrar(e){
	getJSON(json).then(
  function(data) {
  	console.log(data)
  	var arr = [];
  	
  	if(peticion.value != ""){
  		for(var element in data) {
  	
  		if((data[element].pais).toLowerCase().includes((e.target.value).toLowerCase()) && peticion!=''){
  			arr.push(data[element]);
  		}
  	}
  	}
  

  console.log(arr)
  if(arr.lenght==0){
   alert('Algo fue mal, esta vacio.');
  }else {
  	console.log(arr)
  	$('#desplegable').html('');
    arr.forEach(function(element){
      $('#desplegable').append(
          '<option class="elemento">' + element.pais + '</option>'
        );
    });
  }

}, function(status) {
   alert('Algo fue mal.');
});
}

	
	