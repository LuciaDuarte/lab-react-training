import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      backgroundColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    };
  }

  handleLikeButtonClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div className="LikeButton">
        <button onClick={this.handleLikeButtonClick}>
          {this.state.value === 1
            ? `${this.state.value} Like`
            : `${this.state.value} Likes`}
        </button>
      </div>
    );
  }
}

export default LikeButton;
