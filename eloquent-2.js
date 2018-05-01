//exercise 1:

for (var i= 0; i<= 7; i++) {
    console.log(i);
    }

//answer:

for (var i= "#"; i<= "########"; i+= "#"){
    console.log(i);
}

//answer 2:

for (var i= "#"; i.length <8; i+="#" ){
    console.log(i)
}

//exercise 2:

for (var i= 0; i<=100; i++){
    if (i % 3 == 0)
    console.log("fizz");
    else if (i % 5 == 0) 
    console.log("buzz");
     else 
     console.log(i);       
    }

 //answer 

for (var i= 0; i<=100; i++)
    {
    if (i % 3 == 0 && i % 5 == 0)
    console.log("fizzbuzz");
    else if (i % 3 == 0) 
    console.log("fizz");
    else if (i % 5 == 0) 
    console.log("buzz");
    else 
    console.log(i);
    } 

//exemplorary answer

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

//exercise 3: I had trouble visualizing this one so I had to refer to the answer to complete this one within 2 hr frame

var size = 8;

let board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);