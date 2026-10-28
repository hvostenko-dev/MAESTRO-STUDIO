import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const langs = [
  { code: 'ru', label: 'RU', ariaLabel: 'Русский язык' },
  { code: 'he', label: 'עב', ariaLabel: 'עברית' },
  { code: 'en', label: 'EN', ariaLabel: 'English language' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'ru')
    .substring(0, 2)
    .toLowerCase();

  const handleLanguageChange = (code) => {
    if (code === currentLang) return;
    i18n.changeLanguage(code);
    const dir = code === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = code;
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      {langs.map(({ code, label, ariaLabel }) => {
        const isActive = currentLang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleLanguageChange(code)}
            className={isActive ? 'active' : ''}
            aria-pressed={isActive}
            aria-label={ariaLabel}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
