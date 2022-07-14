import Contact from "../src/components/home/Contact";
import Footer from "../src/components/home/Footer";
import Navigation from "../src/components/home/Navigation";
import Layout from "../src/components/layout";
import Separator from "../src/components/separator";

export default function checkout() {
	return (
		<Layout>
			<header>
				<Navigation />
			</header>

			<Separator className="mt-4" />
			<Contact />
			<Separator className="mt-5" />
			<Separator className="pt-4" />

			<Footer />
		</Layout>
	);
}
