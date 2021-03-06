import { Table, Container } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { getdatabarang } from "../../../services/apicall";
import Link from "next/link";

export default function Tabel() {
	const [barangList, setBarangList] = useState([]);

	const getBarangApi = useCallback(async () => {
		const data = await getdatabarang();
		setBarangList(data);
	}, []);

	useEffect(() => {
		getBarangApi();
	});

	return (
		<Container>
			<h2 className="pb-4 text-center fw-light">Daftar Pengadaan Barang</h2>
			<Table responsive bordered hover className="main-table">
				<thead>
					<tr>
						<th>No</th>
						<th>Subject Pengadaan</th>
						<th>Lokasi</th>
						<th>Kategori</th>
						<th>Pembukaan Registrasi</th>
						<th>Penutupan Registrasi</th>
					</tr>
				</thead>
				{barangList.map((item, index) => {
					return (
						<tbody key={item._id}>
							<tr>
								<td>
									<p>{index + 1}</p>
								</td>
								<Link href={`/detail/` + item._id}>
									<a id={item._id}>
										<td>{item.name}</td>
									</a>
								</Link>
								<td>{item.location.name}</td>
								<td>{item.category.name}</td>
								<td>{item.reservationdate}</td>
								<td>{item.endingdate}</td>
							</tr>
						</tbody>
					);
				})}
			</Table>
		</Container>
	);
}
