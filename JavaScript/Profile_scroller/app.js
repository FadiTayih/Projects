

const data =[
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        location: 'Boston',
        lookingfor: 'female',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 27,
        gender: 'Female',
        location: 'LA',
        lookingfor: 'Male',
        image: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
        name: 'Willams John',
        age: 32,
        gender: 'Male',
        location: 'SA',
        lookingfor: 'female',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = ProfileIterator(data);

// Call nextProfile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display

function nextProfile(){

    const currentProfile = profiles.next().value;

    if(currentProfile != undefined){

        document.getElementById('profileDisplay').innerHTML =`
        <ul class="list-group">
        <li class="list-group-item">Name : ${currentProfile.name}</li>
        <li class="list-group-item">Age : ${currentProfile.age}</li>
        <li class="list-group-item">Gender : ${currentProfile.gender}</li>
        <li class="list-group-item">Location : ${currentProfile.location}</li>
        <li class="list-group-item">Looking for : ${currentProfile.lookingfor}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML=`<img src="${currentProfile.image}">`
    }
    else{
        // No more Profiles
        window.location.reload();
    }
}

// Profile Iterator
function ProfileIterator(profiles){

     let nextIndex = 0;

     return {
         next: function(){
             return nextIndex < profiles.length ? {value : profiles[nextIndex++],
            done: false} : {done : true}
         }
     };
}