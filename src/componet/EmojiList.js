import React, { useState, useEffect } from 'react';
import TopEmoji from './TopEmoji';

const EmojiList = () => {
    const [emojis, setEmojis] = useState([]);
    const [showTopEmoji, setShowTopEmoji] = useState(false);

    useEffect(() => {
        ImportEmoji();
    }, []);

    const ImportEmoji = () => {
        const importAll = (requireContext) => requireContext.keys().map(requireContext);
        const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

        const emojiList = images.map((image, index) => ({
            id: index + 1,
            src: image,
            like: 0,
        }));

        setEmojis(emojiList);
    };

    const handleLike = (id) => {
        setEmojis((prevEmojis) =>
            prevEmojis.map((emoji) =>
                emoji.id === id ? { ...emoji, like: emoji.like + 1 } : emoji
            )
        );
    };

    const toggleShowTopEmoji = () => {
        setShowTopEmoji((prev) => !prev);
    };

    return (
        <div>
            <h1>Emoji List</h1>
            <ul>
                {emojis.map((emoji) => (
                    <li key={emoji.id}>
                        <img src={emoji.src} alt={`Emoji ${emoji.id}`} width="50" />
                        <p>Likes: {emoji.like}</p>
                        <button onClick={() => handleLike(emoji.id)}>Like</button>
                    </li>
                ))}
            </ul>

            <button onClick={toggleShowTopEmoji}>
                {showTopEmoji ? 'Hide Top Emojis' : 'Show Top Emojis'}
            </button>

            {showTopEmoji && <TopEmoji emojis={emojis} />}
        </div>
    );
};

export default EmojiList;
