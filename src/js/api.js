const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Получение постов
export function fetchPosts(limit = 10) {
    return fetch(`${API_BASE_URL}/posts?_limit=${limit}`).then(response => response.json());
}

// Получение комментариев к посту
export function fetchComments(postId, limit = 2) {
    return fetch(`${API_BASE_URL}/posts/${postId}/comments?_limit=${limit}`).then(response => response.json());
}

// Создание нового поста
export function createPost(postData) {
    return fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    }).then(response => response.json());
}