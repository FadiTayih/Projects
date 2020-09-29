
class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>

        </div>
        <div class="col-md-9">

        <span class="badge badge-primary">Public Repos: ${user.public_repos}></span>
        <span class="badge badge-secondary">Public Gits: ${user.public_gists}></span>
        <span class="badge badge-success">Followers: ${user.followers}></span>
        <span class="badge badge-info">Following: ${user.following}></span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Lastest Repo</h3>
        <div id="repos"></div>
        `;

    }

    // Show repos

    showRepos(repos){

        let output = '';

        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}></span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}></span>
            <span class="badge badge-success">Forks: ${repo.forks_count}></span>
            </div>
            </div>
            </div>
            `;
        });

        // output the repo
        document.getElementById('repos').innerHTML= output;
    }

    showAlert(message, className){

        // Create a div
        const div = document.createElement('div');

        // Add the class name to the div
        div.className = className;

        // Clear any remaining alert 
        this.clearAlert();

        // Add the text to the div
        div.appendChild(document.createTextNode(message));
        // Get the parent
        const parent = document.querySelector('.searchContainer');
        // Get the search 
        const search = document.querySelector('.search');
        // Inset the alet
        parent.insertBefore(div, search);


        // Set a time out to remove the alert

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear the alert 
    clearAlert(){
        const alert = document.querySelector('.alert');

        if(alert){
            alert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML ='';
    }
}