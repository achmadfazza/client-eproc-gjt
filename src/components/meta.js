import Head from "next/head";

const Meta = ({ title, desc }) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={desc} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.ico" />
	</Head>
);

export default Meta;
