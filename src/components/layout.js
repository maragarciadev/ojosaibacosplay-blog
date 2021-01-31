import React from "react";
import {Link} from "gatsby";
import logo from "../images/logo.png";

function Layout({ children }) {
    return (
        <>
            <header className="header">
                <nav className={"navigation container"}>
                    <Link to="/">
                        <img className="logo" alt="Logo von Ojo Saiba Cosplay" src={logo}/>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/blog">Blog</Link>
                            <ul>
                                <Link to="/blog/cosplay-tutorials"><li>Cosplay Tutorials</li></Link>
                                <Link to="/blog/make-up-tutorials"><li>Make-Up Tutorials</li></Link>
                                <Link to="/blog/wigstyling-tutorials"><li>Wigstyling Tutorials</li></Link>
                                <Link to="/blog/cosplay-talks"><li>Cosplay Talks</li></Link>
                            </ul>
                        </li>
                        <li>
                            <Link to="/vlog">Vlog</Link>
                            <ul>
                                <Link to="/vlog/conventions"><li>Conventions</li></Link>
                                <Link to="/vlog/behind-the-scenes"><li>Behind the Scenes</li></Link>
                                <Link to="/vlog/projekte"><li>Projekte</li></Link>
                            </ul>
                        </li>
                        <Link to="/kontakt"><li>Kontakt</li></Link>
                    </ul>
                </nav>
            </header>
            <main>
                { children }
            </main>
            <footer className={"footer"}>
                <nav className={"footer-nav"}></nav>
            </footer>
        </>
    );
}

export default Layout;
