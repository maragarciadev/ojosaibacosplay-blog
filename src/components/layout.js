import React from "react";

function Layout({ children }) {
    return (
        <>
            <header className={"header"}>
                <nav className={"navigation"}></nav>
                {/*<div className={"hero"}></div>*/}
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
