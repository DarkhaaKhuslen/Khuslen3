// for loop -> dawtalt -> neg codiig olon dahin ashiglah
// for(hedees_ehleh; hed_hurtel, nemegdeh/hasagdah){}
for(var i=1; i<=10;i++){
    console.log(i+" Bat");
}
// i=1 -> 1<=10 -> true => 1Bat -> i++
// i=2 -> 2<=10 -> true => 2Bat -> i++
//....
// i=11 -> 11<=10 -> false
for(var i=10; i>=1;i--){
    console.log(i+" Bat");
}
for(var i=1; i<=20;i++){
    if(i%2==0){
        console.log("tegsh "+i);
    }else{
        console.log("sondgoi "+i);
    }
}
for(var i=1; i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("3 huwaagdah, 5 zereg huwaagdah "+i);
    }
}
var too=5;
for(var i=1; i<=10; i++){
    console.log(too+"x"+i+"="+too*i)
}
var niilber =0;
var urjwer =1; 
for(var i=1; i<=10; i++){
    niilber = niilber+i;
    urjwer = urjwer*i;
}
console.log(niilber);
console.log(urjwer);
var random = Math.floor(Math.random()*10)+1;
console.log(random);
for(var i=1; i<=3; i++){
    var too = +prompt("1-10 hoorond toog taana uu");
    if(random==too){
        alert("zow taalaa");
        alert("ta "+ i + " dahi udaagaar hojloo");
        break;
    }else if(too>10 || too<0){
        alert("buruu utg oruullaa")
    }else if(too>random){
        alert("ih baina")
    }else if(random>too){
        alert("baga baina")
    }else{
        alert("buruu taalaa");
    }
    if(i==3){
        alert("tanii ami duuslaa");
    }
}

