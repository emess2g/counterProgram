// how to accept user input

// let  username;

//  document.getElementById("myButton").onclick = function(){
//     username =  document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = `Hello ${username}`;
//  }

let count = 0;

document.getElementById("decrease").onclick = function(){
    count -= 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    count += 1;
    document.getElementById("count").innerHTML = count;
}