class GitHub{
    constructor(){
        this.client_Id = '2f3b18700860a2a37db7';
        this.client_secret = '5531ce155f7b64b504da18091c36215e25bd19c1';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser (user){
            
        // fetch the user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_Id}&client_secret=${this.client_secret}`);

        // Fetch the user repo
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_Id}&client_secret=${this.client_secret}`);

        // get the json data from the variable

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}