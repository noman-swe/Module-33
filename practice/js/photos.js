function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(photos => displayPhotos(photos))
}

function displayPhotos(photos) {
    const photosDiv = document.getElementById('photos')
    for (const photo of photos) {
        // console.log(photo.url);
        const img = document.createElement('img');
        img.classList.add('img-class');
        
        img.src = photo.url;
        photosDiv.appendChild(img);
    }
}