const Post = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


// function createPost(post){

//     setTimeout(function(){
//         Post.push(post);
//     },2000);
// }

// function getPost(){

//     setTimeout(function(){

//         let output= '';
//         Post.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML= output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPost();

function createPost(post, callback){

    setTimeout(function(){
        Post.push(post);
        callback();
    },2000);
}

function getPost(){

    setTimeout(function(){

        let output= '';
        Post.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML= output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPost);