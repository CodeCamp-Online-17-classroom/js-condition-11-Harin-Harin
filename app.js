let user = prompt("Enter username:");
let pass = '';

if(user == "codecamp" ){
    pass = prompt("Enter password")
    if(pass !== '123456'){alert("Wrong password"); user = 'guest'; alert(`Hello ${user}`);}
       else if(pass = '123456'){alert(`Hello ${user}`)}
}
else{user = 'guest'; alert(`Hello ${user}`);}


console.log(`username : ${user}`)
console.log(`password : ${pass}`);
