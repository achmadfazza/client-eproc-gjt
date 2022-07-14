import { Nav, Navbar, Image } from "react-bootstrap";

const Navigation = () => (
	<Navbar className="container navbar navbar-expand-lg navbar-light">
		<Navbar.Brand href="/">
			<Image src="/images/gjtgroup.png" width={100} height={65} alt="logo-head" />
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="navbarScroll" />
		<Navbar.Collapse id="navbarScroll">
			<Nav className="ms-auto">
				<Nav.Link href="">
					<i>LOGIN</i>
				</Nav.Link>
				<Nav.Link href="">
					<i>SIGN UP</i>
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
