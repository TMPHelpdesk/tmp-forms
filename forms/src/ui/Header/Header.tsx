import logo from "../../assets/logo.png";
import Image from "react-bootstrap/Image";


import "./Header.css";
import AboutModal from "../../components/AboutModal/AboutModal";

export default function Header() {


    return (
        <>
            <div className="header">
                <Image className="logo" src={logo} alt="Logo" />
                <h1 className="appTitle">TMP Forms</h1>
            </div>
            <hr />
            <div className="modalZone">
                <AboutModal />
            </div>
            <hr />
        </>
    )
}