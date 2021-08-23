import { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Gallery from "react-photo-gallery";
import "../../Assets/Style/Components/Blocks/_Gallary.scss";
import SelectedImage from "./Selectedimage";
// import { AiOutlineEye, AiOutlineDoubleRight } from "AiOutlineEye/ai";
const photos = [
  {
    src: "/images/tea5.png",
    width: 4,
    height: 2,
  },
  {
    src: "/images/tea1.png",
    width: 4,
    height: 2,
  },
  {
    src: "/images/tea4.png",
    width: 2,
    height: 2,
  },
  {
    src: "/images/tea3.png",
    width: 3,
    height: 2,
  },
  {
    src: "/images/tea3.png",
    width: 3,
    height: 2,
  },
  {
    src: "/images/background1.png",
    width: 3,
    height: 2,
  },
];
const imageRenderer = ({ index, left, top, key, photo }) => {
  console.log({ index, left, top, key, photo });
  return (
    // <div
    //   className="gallery-single-img"
    //   style={{
    //     background: `url(${photo.src})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     // height: "100px",
    //   }}
    // >
    //   <div>helli</div>
    //   <div></div>
    // </div>

    <SelectedImage
      // selected={selectAll ? true : false}
      key={key}
      margin={"2px"}
      index={index}
      photo={photo}
      left={left}
      top={top}
    />
  );
};

class Gallary extends Component {
  render() {
    return (
      <div className="Gallary">
        <Container>
          <div className="Gallary">
            <Row>
              <Gallery photos={photos} renderImage={imageRenderer} />
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Gallary;
