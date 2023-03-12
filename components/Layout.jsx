import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'HighDevs Pvt. Ltd.' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Header/>
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
