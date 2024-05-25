const Passwordbox=document.querySelector('#password');
const length=12;
 const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lowercase='abcdefghijklmnopqrstuvwxyz';
 const num="0123456789"
 const symbols='!@#$%&*+_?~=-'
 const alchars=uppercase + lowercase +num +symbols;

 function random(){
    let password="";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += num[Math.floor(Math.random()*num.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    while(length > password.length){
        password += alchars[Math.floor(Math.random()*alchars.length)];
    }
   Passwordbox.value=password;
 }
 function copyPassword(){
    Passwordbox.select();
    document.execCommand("copy");
    const copyBtn = document.querySelector("#copybtn");
    copyBtn.innerText = "Copied";
    setTimeout(()=>{
        copyBtn.innerText = "Copy";
    },1000);
 }