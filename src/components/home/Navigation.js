import { Nav, Navbar, Image } from "react-bootstrap";

const Navigation = () => (
	<Navbar className="container navbar navbar-expand-lg navbar-dark">
		<Navbar.Brand href="/">
			<Image src="/images/logo.png" alt="logo-head" />
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="navbarScroll" />
		<Navbar.Collapse id="navbarScroll">
			<Nav className="ms-auto">
				<Nav.Link href="">
					<i className="fa fa-facebook-f"></i>
				</Nav.Link>
				<Nav.Link href="">
					<i className="fa fa-instagram"></i>
				</Nav.Link>
				<Nav.Link href="">
					<i className="fa fa-whatsapp"></i>
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
