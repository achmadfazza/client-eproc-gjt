import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { getDetail } from "../../services/apicall";
import Navigation from "../../src/components/home/Navigation";
import Layout from "../../src/components/layout";
import Footer from "../../src/components/home/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Separator from "../../src/components/separator";
import Buttons from "../../src/components/home/Buttons";

export default function detail() {
	const title = "E-Procurement Gujati 59 Utama";
	const desc = "Website E-Procurement Gujati 59 Utama";

	const { query, isReady } = useRouter();
	const [dataItem, setDataItem] = useState({});
	const [dataCategory, setDataCategory] = useState({});
	const [dataLocation, setDataLocation] = useState({});

	const getBarangDetailAPI = useCallback(async (id) => {
		const data = await getDetail(id);
		setDataItem(data);
		setDataCategory(data.category);
		setDataLocation(data.location);
	}, []);

	useEffect(() => {
		if (isReady) {
			getBarangDetailAPI(query.id);
		} else {
			console.log("router belum tersedia");
		}
	});

	return (
		<Layout title={title} desc={desc}>
			<header>
				<Navigation />
			</header>
			<Container className="table-responsive-md pt-5">
				<Row>
					<Separator className="pt-5" />
					<div>
						<h2>Informasi Pengadaan</h2>
					</div>
					<Separator className="pt-2" />
				</Row>
				<Row>
					<Col>
						<Table hover bordered className="second-table">
							<tbody>
								<tr>
									<th>Nomer ID</th>
									<td>{dataItem._id}</td>
								</tr>
								<tr>
									<th>Nama Pengadaan</th>
									<td>{dataItem.name}</td>
								</tr>
								<tr>
									<th>Kategori</th>
									<td>{dataCategory.name}</td>
								</tr>
								<tr>
									<th>Lokasi Pengadaan</th>
									<td>{dataLocation.name}</td>
								</tr>
								<tr>
									<th>Tanggal Pembukaan</th>
									<td>{dataItem.reservationdate}</td>
								</tr>
								<tr>
									<th>Tanggal Penutupan</th>
									<td>{dataItem.endingdate}</td>
								</tr>
								<tr>
									<th>Kebutuhan</th>
									<td>{dataItem.requirement}</td>
								</tr>
								<tr>
									<th>Deskripsi</th>
									<td>{dataItem.description}</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Separator className="pt-4" />
				<Buttons />
				<Separator className="p-4" />
			</Container>
			<Footer />
		</Layout>
	);
}
