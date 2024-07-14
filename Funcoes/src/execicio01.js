
var v1 = []

var v2 = []

var v3 = []

var vetorResult = []

for(var i = 0; i < 9; i++){
    
     v1[i] = parseInt(Math.random() * 100)

     v2[i] = parseInt(Math.random() * 100)

     v3[i] = parseInt(Math.random() * 100)

  
}
for(var i = 0; i < 2; i++){
    vetorResult.push(v1[i])

}
for(var i = 0; i < 5; i++){
    vetorResult.push(v2[i])
    
}
for(var i = 0; i < 8; i++){
    vetorResult.push(v3[i])
    
}



console.log("[index] - [v1] - [v2] - [v3] - [vetorResult]")
console.log("["+i+"] - "+"[" + v1[i] + "] - " + "[" + v2[i] + "] - " +"[" + v3[i] + "]"+"[" + vetorResult[i] + "]")
