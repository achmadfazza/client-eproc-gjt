import { Container } from "react-bootstrap";

const Footer = () => (
	<footer>
		<Container fluid className="text-center text-white py-2">
			<h2 className="text-center text-white mb-2">PT Gujati 59 Utama</h2>
			<div className="social my-4">
				<a href="">
					<i className="fa fa-facebook-f"></i>
				</a>
				<a href="">
					<i className="fa fa-instagram"></i>
				</a>
				<a href="">
					<i className="fa fa-whatsapp"></i>
				</a>
			</div>
		</Container>
	</footer>
);

export default Footer;
