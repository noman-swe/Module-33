document.getElementById('load-user').addEventListener('click', () => fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => displayUsersData(data))
);

function displayUsersData(users){
    const ul = document.getElementById('users');
    for(const user of users){
        const li = document.createElement('li');
        li.innerHTML = `Name: <span class='name'> ${user.name} </span> & Email Address: <span class='email'> ${user.email} </span>`;
        ul.appendChild(li);
    }
}