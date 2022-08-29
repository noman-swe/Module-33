function getAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => displayAlbum(albums));
}


function displayAlbum(albums) {
    // console.log(albums);
    const albumSection = document.getElementById('album-container')
    for(const album of albums){
        console.log(album);
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `<h4>${album.title}</h4>`;
        albumSection.appendChild(div);
    }
}