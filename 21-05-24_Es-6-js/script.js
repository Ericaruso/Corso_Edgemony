function consoleClear() {
    console.clear();
  }
  
  consoleClear();


//seconda parte
function capitalize(string) {
    if (string.length === 0) {
      return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  //output
console.log(capitalize('ciao'));     // Ciao
console.log(capitalize('mondo'));    // Mondo
console.log(capitalize('Mondo'));    // Mondo
console.log(capitalize('TEST'));     // Test
  

//terza parte
function min(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Entrambi i parametri devono essere numeri!";
    }
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(min(1, 3));     
  console.log(min(5, -3));    
  console.log(min(100, 20));  
  

//quarta parte
function potenza(base, esponente) {

    let result = 1
    for(let i =0; i < esponente; i++){
        result *= base;
    }
    if (esponente = 0){
        result = 1
    }
    return result;
}
console.log(potenza(4,4))
console.log(potenza(5,0))


