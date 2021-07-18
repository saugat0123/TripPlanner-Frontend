import { Component } from "react";
import Footer from './footer'
import Icon from './icons'


class FooterContainer extends Component {
    render() {
        return (
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Title>About Us</Footer.Title>
                            <Footer.Link href="#">Hotels</Footer.Link>
                            <Footer.Link href="#">Shop</Footer.Link>
                            <Footer.Link href="#">Gallery</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Services</Footer.Title>
                            <Footer.Link href="#">Support</Footer.Link>
                            <Footer.Link href="#">Consulting</Footer.Link>
                            <Footer.Link href="#">Development</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Contact Us</Footer.Title>
                            <Footer.Link href="#">9861253745</Footer.Link>
                            <Footer.Link href="#">triplanner@gmail.com</Footer.Link>
                            <Footer.Link href="#">Feedback</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Social</Footer.Title>
                            <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>

        )
    }
}

export default FooterContainer;