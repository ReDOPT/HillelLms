import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            mode : 'Increment',
            multiplier: 1
        };
    };

    handleClick = () => {
        this.setState({
            count: this.state.mode === 'Increment' ? this.state.count + this.state.multiplier : this.state.count - this.state.multiplier
        })
    }

    toggleMode = () => {
        this.setState({
            mode:this.state.mode === 'Increment' ? 'Decrement' : 'Increment'
        })
    };

    resetCounter = () =>{
        this.setState({
            count:0
        })
    };

    one =() =>{
        this.setState({
            multiplier:1
        })
    }

    fife=()=>{
        this.setState({
            multiplier:5
        })
    }

    twenty=()=>{
        this.setState({
            multiplier:10
        })
    }

    render(){
        return(
            <div className='counter-conteiner'>
                <h1 className='couter-value'>Значення :{this.state.count}</h1>
                <span
                    className='counter-mod'>режим:{this.state.mode === 'Increment' ? 'Збільшення' : 'Зменшення'}</span>
                <button className='counter-button' onClick={this.handleClick}>
                    {this.state.mode === 'Increment' ? `Додати ${this.state.multiplier}` : `відняти ${this.state.multiplier}`}
                </button>
                <button className='counter-button counter-button-mod' onClick={this.toggleMode}>
                    Перемкнути режим
                </button>
                <button className='counter-button counter-button-clear' onClick={this.resetCounter}>
                    Скинуты
                </button>
                <div>
                    <button className='counter-button counter-button-clear' onClick={this.one}>
                        1
                    </button>
                    <button className='counter-button counter-button-clear' onClick={this.fife}>
                        5
                    </button>
                    <button className='counter-button counter-button-clear' onClick={this.twenty}>
                        10
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;