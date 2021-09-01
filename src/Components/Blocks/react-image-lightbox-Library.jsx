import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { AiOutlineEye } from "react-icons/ai";
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const images = this.props.photo.map(({ src }) => src);

    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div
          className="lightboxEyeContainer"
          type="button"
          onClick={() =>
            this.setState({
              isOpen: true,
              photoIndex: this.props.photo.findIndex(
                ({ src }) => src === this.props.selectedImage.src
              ),
            })
          }
        >
          <AiOutlineEye size={35} />
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
