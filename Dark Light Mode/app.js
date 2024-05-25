var icon = document.getElementById("icon");
icon.addEventListener(('click'),() =>{
    document.body.classList.toggle('dark');
    if(document.body.classList.contains("dark")){
        icon.src="sun.png"
    }else{
        icon.src="moon.png"
    }
})