var assert = require('assert');

var ejercicios = new EjerciciosArray();

describe("Ejercicios Arrays", function(){
  describe("Ejercicio 1", function(){
    it("Prueba de [2,3] y 10", function(){
      assert.equal(60, ejercicios.ejercicio1([2,3], 10));
    });
});
});

//Ejercicio 1


this.ejercicio1 = function(arreglo,numero){
	var res = 0
  	if(Array.isArray(arreglo))
  	{
  		res =arreglo.reduce(function(n1 ,n2){
  			return n1*n2;
  		});
  	}else{
  		if(!isNaN(arreglo)){
  			res = arreglo;
   		}
  	}

  	if(!isNaN(numero)){
  		res = res *numero;
  	}

  	return res;
}

