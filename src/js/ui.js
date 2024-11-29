// Отображение одного поста
export function displayPost(post) {
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

// Отображение комментариев
export function displayComments(postId, comments) {
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
}

// Очистка формы после отправки
export function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
}
