import React from 'react';

class EmojiList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emojis: [],
        };
    }

    componentDidMount() {
        this.ImportEmoji();
    }

    ImportEmoji = () => {
        const importAll = (requireContext) => requireContext.keys().map(requireContext);
        const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

        const emoji = images.map((image, index) => ({
            id: index + 1,
            src: image,
            like: 0,
        }));

        this.setState({
            emojis: [...this.state.emojis, ...emoji],
        });
    };

    handleLike = (id) => {
        this.setState((prevState) => ({
            emojis: prevState.emojis.map((emoji) =>
                emoji.id === id
                    ? { ...emoji, like: emoji.like + 1 }
                    : emoji
            ),
        }));
    }


    render() {
        console.log(this.state.emoji);
        return (
            <div>
                <h1>Emoji List</h1>
                <ul>
                    {this.state.emoji.map((emoji) => (
                        <li key={emoji.id}>
                            <img src={emoji.src} alt={`Emoji ${emoji.id}`} width="50"/>
                            <p>ID: {emoji.id}, Likes: {emoji.like}</p>
                            <button onClick={() => this.handleLike(emoji.id)}>Like</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EmojiList;