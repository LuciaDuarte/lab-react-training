import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleRightClick = () => {
    this.navigate(1);
  };

  handleLeftClick = () => {
    this.navigate(-1);
  };

  navigate(value) {
    const currentIndex = this.state.index;
    const amountOfImages = this.props.imgs.length;
    const index = (currentIndex + value + amountOfImages) % amountOfImages;
    this.setState({
      index,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLeftClick}>Left</button>
        <img src={this.props.imgs[this.state.index]} alt="Carousel" />
        <button onClick={this.handleRightClick}>Right</button>
      </div>
    );
  }
}

export default Carousel;
