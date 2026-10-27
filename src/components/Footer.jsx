import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="iconContainer">
          <a
            href="https://www.instagram.com/maestrostudio1?igsh=MThndXo2dG50aGMydA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="link"
          >
            <Instagram className="icon" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61575288821792&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="link"
          >
            <Facebook className="icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/ilya-hvostenko-a03347298/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="link"
          >
            <Linkedin className="icon" />
          </a>

          <a
            href="https://portfolio-ilyajavadevs-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developer Portfolio"
            className="link"
          >
            <ExternalLink className="icon" />
          </a>
        </div>

        <p className="footer__copy">
          {t('footer.text', '© 2026 MAESTROSTUDIO. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
