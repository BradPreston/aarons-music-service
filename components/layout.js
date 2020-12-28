import Head from "next/head";
import Navbar from "../components/Navbar/navbar";
import MobileNav from "../components/Navbar/mobile-navbar";
import MobileHeader from "../components/Navbar/mobile-header";

export default function Layout({ children, title = `Aaron's Music Service` }) {
  return (
    <div className="mobile_layout content">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MobileHeader />
      <header className="content__header">
        {/* <Navbar /> */}
        <MobileNav />
      </header>
      <main className="content__main">
        <div className="content__main-children">{children}</div>
      </main>
      <footer className="content__footer">
        <p>Site by Brad Preston | bap5393@gmail.com</p>
      </footer>
    </div>
  );
}
