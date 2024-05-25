function searchUser(){
    let username = document.getElementById("userInput").value;
    fetch(`https://api.github.com/users/${username}`)
    .then(res=>{
        if(!res.ok)
        {
            throw new Error('User not found');
        }
        return res.json();
    })
    .then(data=>{
        document.getElementById("demo").innerHTML=`
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">${data.login}</h5>
            </div>
            <div class="card-body">
                <img src="${data.avatar_url}" alt="Avatar" style="width: 100px; height: 100px; border-radius: 50%;">
                <p class="card-text">Name: ${data.name}</p>
                <p class="card-text">Bio: ${data.bio || 'Not available'}</p>
                <p class="card-text">Followers: ${data.followers}</p>
                <p class="card-text">Following: ${data.following}</p>
                <p class="card-text">Public Repositories: ${data.public_repos}</p>
            </div>
        </div>
        `;
    })
    .catch(error => {
        document.getElementById("demo").innerHTML = `<p>${error.message}</p>`;
    });
   }