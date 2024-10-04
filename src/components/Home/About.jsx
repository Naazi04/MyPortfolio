import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/n1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
			<Container fluid className="home-about-section" id="about">
				<Container>
					<Row>
						<Col md={8} className="home-about-description">
							<h1 style={{ fontSize: "2.6em" }}>
								LET ME <span className="yellow"> INTRODUCE </span> MYSELF
							</h1>
							<p className="home-about-body">
								Hi, my name is{" "}
								<span className="yellow">Mohammad Naziya Niqhat </span>
								and I'm from{" "}
								<span className="yellow">
									{" "}
                  Andhra Pradesh<span
                  style={{fontSize:"2rem"}}
                  >  </span>
								</span>
								<br />
								<br />
								I recently graduated with a Bachelors of Computer Applications.
								<br />
								<br />
								As a<b className="yellow"> Full-Stack </b>developer, I enjoy
								tackling new challenges and continuously expanding my skillset.
								<br />
								<br />I am proficient in
								<b className="yellow"> Angular Frontend, Java Full Stack, </b>
								as well as have knowledge in programming languages such as C,
								Java, Python data Analysis, R, Php and Data Structures.
								<br />
								<br />I have a passion for working with{" "}
								<b className="yellow">Angular</b> and
								<i>
									<b className="yellow">
										{" "}
										modern Angular material componets
									</b>
								</i>
								
								<br />
								<br />I am also interested in building new
								<i>
									<b className="yellow"> Web Technologies and Products, </b>
									as well as exploring areas related to
									<b className="yellow"> Artificial Intelligence.</b>
								</i>
								<br />
							</p>
						</Col>
						<Col md={4} className="myAvtar">
							<Tilt
								style={{
									marginLeft: "-250px",
									marginTop: "-130px",
									height: "700px",
									width: "1200px",
								}}
							>
								<img
									style={{
										height: "700px",
										width: "1200px",
									}}
									src={LaptopImg}
									className="img-fluid"
									alt="avatar"
								/>
							</Tilt>
						</Col>
					</Row>
				</Container>
			</Container>
		);
    
}

export default About