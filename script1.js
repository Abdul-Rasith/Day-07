
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
   console.log(res);
  
// a.Get all the countries from Asia continent /region using Filter function
var resul_asia = res.filter((ele)=>ele.region == "Asia");
console.log(resul_asia);

//b. Get all the countries with a population of less than 2 lakhs using Filter function
let popu = res.filter((elem)=>elem.population<200000);
console.log(popu);

//c.Print the following details name, capital, flag, using forEach function
Object.keys(res).forEach((ele)=>console.log(ele,`${res[ele].name.common} ${res[ele].capital} ${res[ele].flag}`))

//d.Print the total population of countries using reduce function
let total_popu = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(total_popu);

//e. Print the country that uses US dollars as currency.
for(var i=0; i<res.length; i++){
    console.log(res[i].currencies)
         
   }
}



