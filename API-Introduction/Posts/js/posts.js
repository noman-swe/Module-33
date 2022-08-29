function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPosts(posts))
}

function displayPosts(posts) {
    const postSection = document.getElementById('posts');
    for (const post of posts) {
        const article = document.createElement('article');
        article.innerHTML = `<h2>${post.title}</h2> </br> <p>${post.body}</p>`;
        postSection.appendChild(article);
    }
}


// 

function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My New Posts',
            body: 'This is my posts',
            userId : 1
        }),
        headers: {  'Content-type': 'application/json; charset=UTF-8', },
    })
    .then(res => res.json())
    .then(data => console.log(data))
}