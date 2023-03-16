import Navbar from "../Components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "../CSS/Home.css";
import Graph from "../Components/Graph";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel className="banner">
        <Carousel.Item className="img">
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/Images/img1.jpg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="img">
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/Images/img5.jpg`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="img">
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/Images/img3.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* <Graph/> */}
    </div>
  );
};

export default Home;
