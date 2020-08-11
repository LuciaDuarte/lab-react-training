import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClickablePictureClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="ClickablePicture">
        <img
          className="ClickablePicture"
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
          alt=""
          onClick={this.handleClickablePictureClick}
        />
      </div>
    );
  }
}

export default ClickablePicture;
