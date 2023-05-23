import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Layout.scss";

interface MyProps {
  children?: React.ReactNode;
}

export default function Layout(props: React.PropsWithChildren<MyProps>) {
  return (
    <>
      <div className="layout-navbar">
        <Navbar />
      </div>
      <main className="layout-content">{props.children}</main>
      <div className="layout-footer">
        <Footer />
      </div>
    </>
  );
}
