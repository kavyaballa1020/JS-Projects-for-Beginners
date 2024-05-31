//client sends a XML HTTP request to the server to fetch the data and server responses to the client without refreshing the whole page
//it loads the content from the server side without knowledge of user.
//By using AJAX we can update the content without reloading the whole page.

let textButton=document.getElementById("TEXT-btn");
textButton.addEventListener('click',function(){
    //creating an ajax request
    let xhr=new XMLHttpRequest();

    //prepare the request
    xhr.open('GET','Ajax.text',true);

   //send request
    xhr.send();
    
    //process the request
    xhr.onload=()=>{
        if(xhr.status===200){
            let data=xhr.responseText;
            displayTextData(data);
        }
    }
    
});

let displayTextData=(data)=>{
   
    document.getElementById('text-card').innerHTML=`<h5>${data}</h5>`
}


//JSON Data

let jsonButton=document.querySelector("#JSON-btn");
jsonButton.addEventListener('click',function(){
    //creating an ajax request
    let xhr=new XMLHttpRequest();
    xhr.open('GET','firstJSON.json',true);
    xhr.send();
    xhr.onload=()=>{
        if(xhr.status===200){
            let data=JSON.parse(xhr.responseText);
            displayJSONData(data);
        }
    }
});
let displayJSONData=(data)=>{
    let htmlTemplate='';
    htmlTemplate=`<ul>
    <li class="list-group-item">Name : ${data[0].name}</li>
    <li class="list-group-item">Age : ${data[0].age}</li>
    <li class="list-group-item">isProgrammer : ${data[0].isProgrammer}</li>
    </ul>`
    document.getElementById('json-card').innerHTML=htmlTemplate;
}


//API Data

let apiButton=document.querySelector("#API-btn");
apiButton.addEventListener('click',function(){
    //creating an ajax request
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.org/users',true);
    xhr.send();
    xhr.onload=()=>{
        if(xhr.status===200){
            let data=JSON.parse(xhr.responseText);
            console.log(data)
            displayAPIData(data);
        }
    }
});
let displayAPIData=(data)=>{
    let htmlTemplate='';
    for (let i of data){
        htmlTemplate+=`<ul>
        <li class="list-group-item">Name : ${i.firstname}</li>
        <li class="list-group-item">Username : ${i.lastname}</li>
        <li class="list-group-item">Email : ${i.email}</li>
        
        </ul>`
    }
    document.getElementById('api-card').innerHTML=htmlTemplate;
}