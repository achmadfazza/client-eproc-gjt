import { Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function Buttons() {
	return (
		<Col className="text-center">
			<Link href="/">
				<Button variant="primary" size="sm">
					Kembali
				</Button>
			</Link>{" "}
			<Button variant="primary" size="sm">
				Ikut Pengadaan
			</Button>
		</Col>
	);
}
