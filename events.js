import { fetchPosts, fetchComments, createPost } from './api.js';
import { displayPost, displayComments, clearForm } from './ui.js';

export function initEventListeners() {
    // Загрузка постов
    fetchPosts().then(posts => {
        posts.forEach(post => {
            displayPost(post);
        });
    });

    // Обработчик для формы нового поста
    document.getElementById('new-post-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        createPost({ title, body, userId: 1 }).then(post => {
            displayPost(post);
            clearForm();
        });
    });
}

// Логика загрузки комментариев
window.loadComments = function(postId) {
    fetchComments(postId).then(comments => {
        displayComments(postId, comments);
    });
};
