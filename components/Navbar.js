import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const tools = [
  { name: 'PowerPoint', href: '/powerpoint', icon: '/images/icons/powerpoint.png' },
  { name: 'Google Slides', href: '/google-slides', icon: '/images/icons/google-slides.png' },
  { name: 'Canva', href: '/canva', icon: '/images/icons/canva.png' },
  { name: 'Figma', href: '/figma', icon: '/images/icons/figma.png' },
  { name: 'Keynote', href: '/keynote', icon: '/images/icons/keynote.png' },
  { name: 'Gamma', href: '/gamma', icon: '/images/icons/gamma.png' },
  { name: 'Claude Design', href: '/claude-design', icon: '/images/icons/claude.png' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="SlidesEasy" width={140} height={40} style={{ objectFit: 'contain' }} />
        </Link>

        <div className={styles.menu}>
          <div className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <button className={styles.menuItem}>
              Tools
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {tools.map((tool) => (
                  <Link key={tool.name} href={tool.href} className={styles.dropdownItem}>
                    <img src={tool.icon} alt={tool.name} className={styles.dropdownIcon} />
                    {tool.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/#features" className={styles.menuItem}>Features</Link>
          <Link href="/#pricing" className={styles.menuItem}>Pricing</Link>
          <Link href="/blog" className={styles.menuItem}>Blog</Link>
          <Link href="/contact" className={styles.menuItem}>Contact</Link>
        </div>

        <div className={styles.cta}>
          <Link href="/#pricing" className={styles.joinBtn}>Join Now</Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileSection}>
            <p className={styles.mobileSectionTitle}>Tools</p>
            {tools.map((tool) => (
              <Link key={tool.name} href={tool.href} className={styles.mobileItem} onClick={() => setMobileOpen(false)}>
                {tool.name}
              </Link>
            ))}
          </div>
          <div className={styles.mobileDivider} />
          <Link href="/#features" className={styles.mobileItem} onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="/#pricing" className={styles.mobileItem} onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/blog" className={styles.mobileItem} onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" className={styles.mobileItem} onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className={styles.mobileCta}>
            <Link href="/#pricing" onClick={() => setMobileOpen(false)}>Join Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
