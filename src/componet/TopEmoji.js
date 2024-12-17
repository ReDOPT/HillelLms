import React from 'react';

const TopEmoji = ({ emojis }) => {
    const maxLikes = Math.max(...emojis.map((emoji) => emoji.like), 0);
    const topEmojis = emojis.filter((emoji) => emoji.like === maxLikes);

    if (topEmojis.length === 0) {
        return <p>No emojis available or no likes yet.</p>;
    }

    return (
        <div>
            <h2>Top Emojis</h2>
            <ul>
                {topEmojis.map((emoji) => (
                    <li key={emoji.id}>
                        <img src={emoji.src} alt={`Emoji ${emoji.id}`} width="50" />
                        <p>Likes: {emoji.like}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopEmoji;

