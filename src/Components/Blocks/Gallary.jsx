import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Gallery from "react-photo-gallery";
import "../../Assets/Style/Components/Blocks/_Gallary.scss";
import SelectedImage from "./Selectedimage";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// SelectedImage Section Start
const photos = [
  {
    src: "/images/gallery01.png",
    width: 4,
    height: 2,
  },
  {
    src: "/images/gallery06.png",
    width: 4,
    height: 2,
  },
  {
    src: "/images/gallery03.png",
    width: 2,
    height: 2,
  },
  {
    src: "/images/gallery04.png",
    width: 3,
    height: 2,
  },
  {
    src: "/images/gallery05.png",
    width: 3,
    height: 2,
  },
  {
    src: "/images/gallery02.png",
    width: 3,
    height: 2,
  },
];
const imageRenderer = ({ index, left, top, key, photo }) => {
  console.log({ index, left, top, key, photo });
  return (
    <SelectedImage
      // selected={selectAll ? true : false}
      images={photos}
      key={key}
      margin={"2px"}
      index={index}
      photo={photo}
      left={left}
      top={top}
    />
  );
};
// SelectedImage Section End

class Gallary extends Component {
  render() {
    return (
      <div className="Gallary">
        <Container>
          <div className="Gallary1">
            {/* Gallary Header Start */}
            <div className="GallaryTitle">
              {/* Gallary Title Start */}
              <div className="GallaryTitleWord">
                <span></span>
                <h5>Gallery</h5>
              </div>
              {/* Gallary Title End */}
              {/* Gallary List Start */}
              <div className="GallaryList">
                <ul className="GallaryListUlOne">
                  <li>All</li>
                  <li>Showrooms</li>
                  <li>Social Responsibliity</li>
                  <li>Events </li>
                  <li>Company </li>
                  <li>Videos </li>
                </ul>
                {/* Gallary List Start less than 768px */}
                <ul className="GallaryListUlTwo">
                  <li>All</li>
                  <li className="LiDropDownMenu">
                    {" "}
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={<BsThreeDotsVertical />}
                    >
                      <Dropdown.Item href="#/action-1">
                        <li>Showrooms </li>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">
                        <li>Social Responsibliity</li>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <li>Events</li>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <li>Company</li>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <li>Videos</li>
                      </Dropdown.Item>
                    </DropdownButton>
                  </li>
                </ul>
              </div>
              {/* Gallary List End  */}
              {/* Gallary Header End */}
            </div>
            {/* react-photo-gallery Start */}
            <Row>
              <Gallery photos={photos} renderImage={imageRenderer} />
            </Row>
            {/* react-photo-gallery End */}
          </div>
        </Container>
      </div>
    );
  }
}

export default Gallary;
