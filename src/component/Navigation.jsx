export default function Navigation({
  brand,
  items,
  isOpen,
  onToggle,
  onNavigate,
  savedCount,
}) {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a
          className="brand"
          href="#home"
          onClick={onNavigate}
          aria-label={`${brand} home`}
        >
          <span className="brand-mark">✳</span>
          {brand}
          <span className="brand-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls="main-nav"
        >
          {isOpen ? "Close ×" : "Menu ☰"}
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${isOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {items.map((item) => (
            <a href={item.href} key={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#join" onClick={onNavigate}>
            Start learning <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <span className="saved-count" aria-live="polite">
          {savedCount} saved
        </span>
      </div>
    </header>
  );
}
