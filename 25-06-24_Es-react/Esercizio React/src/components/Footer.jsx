function Footer() {
    return (<footer className="footer">
        <div className="container">
            <div className="wrapper">
                <div className="logo">Logo</div>
                <nav className="nav">
                    <FooterMenu />
                </nav>
            </div>
        </div>
    </footer>

    )
}


function FooterMenu() {
    const menuItems = [
        {
            label: "About us",
            children: [
                { label: "Company info" },
                { label: "Careers" },
                { label: "LinkedIn" },
            ],
        },

        {
            label: "Contact",
            children: [
                { label: "Numbers" },
                { label: "E-mail" },
                { label: "Docs" },
            ],
        },
    ];

    return (
        <ul className="menu">
            {menuItems.map((item, index) => (
                <FooterMenuItem key={index} item={item} />
            ))}
        </ul>
    );
}

function FooterMenuItem({ item }) {
    const { label, href = "#", children = [] } = item;

    return (
        <li className="item">
            <a href={href}>{label}</a>
            {children.length > 0 && (
                <ul>
                    {children.map((child, index) => (
                        <li key={index} className="item subitem">
                            {child.label}
                        </li>
                    ))}
                </ul>
            )}
        </li>);
}

export { Footer };

