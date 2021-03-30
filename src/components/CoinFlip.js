import React, { Component } from "react";
import "./CoinFlip.css";

export default class CoinFlip extends Component {
  state = {
    isTails: true,
    totalFlips: 0,
    tails: 0,
    heads: 0,
  };

  handleClick = () => {
    const random = Math.floor(Math.random() * 10)
    if (random > 5) {
      this.setState((prevState) => ({
        tails: prevState.tails + 1,
        totalFlips: prevState.totalFlips + 1,
        isTails: true
      }));
    } else {
      this.setState((prevState) => ({
        heads: prevState.heads + 1,
        totalFlips: prevState.totalFlips + 1,
        isTails: false
      }));
    }
  };

  render() {
    const { totalFlips, heads, tails } = this.state
    return (
      <section className="Coin-flip">
        {this.state.isTails ? (
          <img src="tails.jpeg" alt="tails" />
        ) : (
          <img src="heads.jpeg" alt="heads" />
        )}
        <button onClick={this.handleClick}>Flip Here</button>
        <p>{`Out of ${totalFlips} flips there have been ${heads} heads and ${tails} tails`}</p>
      </section>
    );
  }
}
