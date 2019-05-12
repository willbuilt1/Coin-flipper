import React, { Component } from 'react'

class Coin extends Component{
    render(){
        const heads = "https://upload.wikimedia.org/wikipedia/en/6/6c/Toonie_-_back.png";
        const tails = "https://upload.wikimedia.org/wikipedia/en/d/d2/Toonie_-_front.png";

        const result = this.props.flipped ? heads : tails;
        const altTag = this.props.flipped ? "Heads" : "Tails";

        return(
            <div>
                <img src= {result} alt={altTag} width="300px" height = "300px"/>
            </div>
        )
    }
}

export default Coin;