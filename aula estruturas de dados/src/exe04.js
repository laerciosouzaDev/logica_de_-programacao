var list = []
var numPar = []

for(var i = 0; i < 10; i++){
    list [i] = parseInt(Math.random()* 100)
   
    
    if(list[i] % 2 ===0){
        numPar.push(list[i])
    }
    
} 
console.log(list)
console.log("somente par: " + numPar)
