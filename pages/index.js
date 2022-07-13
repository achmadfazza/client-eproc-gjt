import Footer from "../src/components/home/Footer";
import Navigation from "../src/components/home/Navigation";
import Tabel from "../src/components/home/Tabel";
import Layout from "../src/components/layout";
import Separator from "../src/components/separator";

export default function Home() {
	const title = "E-Procurement Gujati 59 Utama";
	const desc = "Website E-Procurement Gujati 59 Utama";

	return (
		<Layout title={title} desc={desc}>
			<header>
				<Navigation />
			</header>

			<Separator className="pb-5" />

			<Tabel />

			<Separator className="pb-3" />

			<Footer />
		</Layout>
	);
}
