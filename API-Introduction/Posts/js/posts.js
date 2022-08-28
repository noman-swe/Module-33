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