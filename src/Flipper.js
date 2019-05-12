import React, { Component } from 'react'


class Flipper extends Component{
    constructor(props){
        super(props);
        this.state ={
            flips:0,
            heads:0,
            tails:0,
            flipped:""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        function incrementCounter(prevState) {
            return { flips: prevState.flips + 1 };
          }
        //two optioons so this will return 0 or 1. 0 is Heads and 1 is Tails
        const result = Math.floor(Math.random() * 2);
        console.log(result);

        
        this.setState(incrementCounter);

        if(result === 0){
            this.setState(curState => ({ heads: curState.heads + 1, flipped: curState.flipped = 0 }));
        } else{
            this.setState(curState => ({ tails: curState.tails + 1, flipped: curState.flipped = 1 }));
        }
        
        console.log(this.state);

    }

    render(){
        return(
            <div>
                <h1>Lets Flip a Coin</h1>
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>You flipped {this.state.flips} times, {this.state.heads} have been heads and {this.state.tails} have been tails.</p>
            </div>
        )
    }
}

export default Flipper;