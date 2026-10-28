import React, { useEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './NavBar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'ru')
    .substring(0, 2)
    .toLowerCase();
  const isRtl = i18n.dir(currentLang) === 'rtl';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    const onClickOutside = (e) => {
      if (!menuOpen) return;

      const clickedInsideMenu = menuRef.current?.contains(e.target);
      const clickedBurger = burgerRef.current?.contains(e.target);

      if (!clickedInsideMenu && !clickedBurger) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [menuOpen]);

  const maestroLabel = i18n.exists('navbar.maestroweb')
    ? t('navbar.maestroweb')
    : 'MAESTROWEB';

  const navItems = [
    { type: 'scroll', to: 'hero', label: t('navbar.home') },
    { type: 'scroll', to: 'gallery', label: t('navbar.gallery') },
    { type: 'scroll', to: 'services', label: t('navbar.services') },
    { type: 'scroll', to: 'faq', label: t('navbar.faq') },
    { type: 'scroll', to: 'contact', label: t('navbar.contact') },
    {
      type: 'external',
      href: 'https://maestro-web-nine.vercel.app/',
      label: maestroLabel,
    },
  ];

  const renderNavItem = (item, mobile = false) => {
    const linkClassName = mobile
      ? 'navbar__menu-link'
      : item.type === 'external'
        ? 'navbar__link navbar__link--external'
        : 'navbar__link';

    if (item.type === 'scroll') {
      return (
        <Link
          key={item.to}
          to={item.to}
          smooth
          spy
          offset={-82}
          duration={520}
          activeClass="is-active"
          className={linkClassName}
          onClick={() => {
            if (mobile) closeMenu();
          }}
        >
          <span>{item.label}</span>
        </Link>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={linkClassName}
        onClick={() => {
          if (mobile) closeMenu();
        }}
      >
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="navbar__glow navbar__glow--one" />
      <div className="navbar__glow navbar__glow--two" />

      <div className="navbar-container">
        <div className="navbar__left">
          <button
            type="button"
            className="navbar__logo"
            onClick={() => {
              scroll.scrollToTop({ duration: 520, smooth: true });
              closeMenu();
            }}
            aria-label="MAESTROSTUDIO home"
          >
            <span className="navbar__logo-mark">M</span>
            <span className="navbar__logo-text">MAESTROSTUDIO</span>
          </button>
        </div>

        <nav className="navbar__nav-desktop" aria-label="Primary navigation">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="navbar__right-desktop">
          <LanguageSwitcher />
        </div>

        <button
          ref={burgerRef}
          type="button"
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>

      <button
        type="button"
        className={`navbar__overlay ${menuOpen ? 'open' : ''}`}
        aria-label="Close menu overlay"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu"
        ref={menuRef}
        className={`navbar__menu-wrapper ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__menu" aria-label="Mobile navigation">
          <div className="navbar__menu-head">
            <span>Menu</span>
            <small>MAESTROSTUDIO</small>
          </div>

          {navItems.map((item) => renderNavItem(item, true))}

          <div className="lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
