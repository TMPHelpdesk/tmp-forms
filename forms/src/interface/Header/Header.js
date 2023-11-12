import logo from  "./icon.png";
import Image from "react-bootstrap/Image";

import "./Header.css";

export default function Header() {

   
    return (
        <div className="header">
            <Image className="logo" src={logo} />
            <h1 className="appTitle"> TMP Forms</h1>
        </div>
    )
}