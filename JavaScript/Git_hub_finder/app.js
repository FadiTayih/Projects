
// Initialize the objects
const github = new GitHub();

const ui = new UI()

const searchUser = document.getElementById('searchUser');

// Search User Event listner
searchUser.addEventListener('keyup', (e) => {

    // Get the user input
    const input = e.target.value;

    if(input !== ''){
        github.getUser(input)
        .then(data => {
           
            if(data.profile.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User not found', 'alert alert-danger');
            }
            else{
                // Show the profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }
    else{
        // Clear the profile
        ui.clearProfile();
    }
})