export default function Footer({ content, links, year }) {
  return (
    <footer className="site-footer container">
      <div>
        <a className="brand" href="#home">
          <span className="brand-mark">✳</span>
          {content.brand}
          <span className="brand-dot">.</span>
        </a>
        <p>{content.tagline}</p>
      </div>
      <nav aria-label="Footer navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <p className="copyright">
        © {year} {content.copyright}
      </p>
    </footer>
  );
}
