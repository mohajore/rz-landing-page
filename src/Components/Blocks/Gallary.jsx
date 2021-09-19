import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SelectedImage from "./Selectedimage";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { apiService } from "../../services/ApiService";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Lightbox from "./react-image-lightbox-Library";
class Gallary extends Component {
    state = {
        tabSelected: -1,
        lightBox: false,
        imageSelected: "",
        photos: this.props.gallery_all.map(({ image }) => apiService.imageLink + image),
        gallerySelected: this.props.gallery_all,
    };
    render() {
        const { photos, lightBox, imageSelected, gallerySelected } = this.state;
        const { data, gallery_all } = this.props;
        return (
            <div className="Gallary" id="Gallary">
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
                                    <li
                                        className={this.state.tabSelected === -1 ? "tab-active" : ""}
                                        onClick={() =>
                                            this.setState({
                                                tabSelected: -1,
                                                photos: gallery_all.map(({ image }) => apiService.imageLink + image),
                                                gallerySelected: gallery_all,
                                            })
                                        }
                                    >
                                        All
                                    </li>

                                    {data.map((item) => {
                                        return (
                                            <li
                                                className={this.state.tabSelected === item.id ? "tab-active" : ""}
                                                onClick={() =>
                                                    this.setState({
                                                        tabSelected: item.id,
                                                        photos: item.images.map(({ image }) => apiService.imageLink + image),
                                                        gallerySelected: item.images,
                                                    })
                                                }
                                            >
                                                {item.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* Gallary List Start less than 768px */}
                                <ul className="GallaryListUlTwo">
                                    <li
                                        onClick={() =>
                                            this.setState({
                                                tabSelected: -1,
                                                photos: gallery_all.map(({ image }) => apiService.imageLink + image),
                                                gallerySelected: gallery_all,
                                            })
                                        }
                                    >
                                        All
                                    </li>{" "}
                                    <li className="LiDropDownMenu">
                                        {" "}
                                        <DropdownButton id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
                                            {data.map((item) => {
                                                return (
                                                    <Dropdown.Item
                                                        onClick={() =>
                                                            this.setState({
                                                                tabSelected: item.id,
                                                                photos: item.images.map(({ image }) => apiService.imageLink + image),
                                                                gallerySelected: item.images,
                                                            })
                                                        }
                                                    >
                                                        <li>{item.name} </li>
                                                    </Dropdown.Item>
                                                );
                                            })}

                                            {/* <Dropdown.Item onClick={() => this.setState({ tabSelected: 1 })}>
                                                <li>Showrooms </li>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.setState({ tabSelected: 1 })}>
                                                <li>Social Responsibliity</li>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.setState({ tabSelected: 1 })}>
                                                <li>Events</li>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.setState({ tabSelected: 1 })}>
                                                <li>Company</li>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.setState({ tabSelected: 1 })}>
                                                <li>Videos</li>
                                            </Dropdown.Item> */}
                                        </DropdownButton>
                                    </li>
                                </ul>
                            </div>
                            {/* Gallary List End  */}
                            {/* Gallary Header End */}
                        </div>
                        {/* react-photo-gallery Start */}
                        <Row>
                            {/* <Gallery photos={photos} renderImage={this.imageRenderer} /> */}
                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 570: 2, 900: 3 }}>
                                <Masonry columnsCount={3} gutter="10px">
                                    {gallerySelected.map(({ image, title, text }, i) => (
                                        // <div>
                                        //     <img key={i} src={image} style={{ width: "100%", display: "block" }} />
                                        // </div>
                                        <div className="gallery-single-img" onClick={() => this.setState({ imageSelected: apiService.imageLink + image, lightBox: true })}>
                                            <img key={i} src={apiService.imageLink + image} style={{ width: "100%", display: "block" }} />

                                            <div className="gallery-single-img-title">
                                                <h3>{title}</h3>
                                                <p>{text}</p>
                                                <div className="MoreDetailsAndEyeIcon">
                                                    <div className="MoreDetails">
                                                        More Details &nbsp; &nbsp;
                                                        <AiOutlineDoubleRight size={25} />
                                                    </div>
                                                    {/* <div className="EyeIcon">
                                                        <Lightbox
                                                            // photo={photos} selectedImage={apiService.imageLink + image}

                                                            mainSrc={photos[i]}
                                                            nextSrc={photos[(i + 1) % photos.length]}
                                                            prevSrc={photos[(i + photos.length - 1) % photos.length]}
                                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                                            onMovePrevRequest={() =>
                                                                this.setState({
                                                                    photoIndex: (i + photos.length - 1) % photos.length,
                                                                })
                                                            }
                                                            onMoveNextRequest={() =>
                                                                this.setState({
                                                                    photoIndex: (i + 1) % photos.length,
                                                                })
                                                            }
                                                        />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </Row>
                        {/* react-photo-gallery End */}
                    </div>
                </Container>
            </div>
        );
    }
    // SelectedImage Section Start

    imageRenderer = ({ index, left, top, key, photo }) => {
        return (
            <SelectedImage
                // selected={selectAll ? true : false}
                images={this.state.photos}
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
}

export default Gallary;
