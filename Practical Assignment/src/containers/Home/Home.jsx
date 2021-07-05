import { Container,Button,Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import img1 from './images/Capture.PNG';
import img2 from './images/Capture2.PNG';
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Container fluid classname="pt-5">
        <Row>
          <Col lg={6}>
            <h1 class="b6"><b>Healthy living.</b></h1>
            <h1 class="b7"><b>Simplified.</b></h1>
            <h5 class="b8">The digital self-care app that helps you </h5>
            <h5 class="b9"> reach your health and weight goals</h5>
            <h5 class="b10">through better eating.</h5>
          </Col>
          <Col lg={3}> 
          <img class="img" src={img1}></img>
          </Col>
          <Col >
          <img class="img2" src={img2}></img>
          </Col>
          
        </Row>
        <Row >
          <Col lg={12}>
          <button class="b1"><b>READ MORE</b></button>
          
          </Col>
          <Col lg={11}>
           <button class="b2"><b>SIGN UP</b><br/>From $4.17/mon</button> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
