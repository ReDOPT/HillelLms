fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(posts => {

        posts.forEach(post => {

            displayPost(post);
        });
    })
    .catch(error => console.log('Error fetching posts:', error));

function displayPost(post) {
    const postContainer = document.getElementById('post-list');
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <button onclick="loadComments(${post.id})">Завантажити коментарі</button>
    <div id="comments-${post.id}"></div>
  `;
    postContainer.appendChild(postElement);
}

function loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById(`comments-${postId}`);
            commentsContainer.innerHTML = '';
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
          <p><strong>${comment.name}</strong> (${comment.email})</p>
          <p>${comment.body}</p>
        `;
                commentsContainer.appendChild(commentElement);
            });
        })
        .catch(error => console.log('Error fetching comments:', error));
}

function loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById(`comments-${postId}`);
            commentsContainer.innerHTML = '';
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
          <p><strong>${comment.name}</strong> (${comment.email})</p>
          <p>${comment.body}</p>
        `;
                commentsContainer.appendChild(commentElement);
            });
        })
        .catch(error => console.log('Error fetching comments:', error));
}

document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const newPost = {
        title,
        body,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
        .then(post => {
            alert('Пост створено успішно');
            displayPost(post);
        })
        .catch(error => console.log('Error creating post:', error));
});