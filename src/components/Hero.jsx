import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { IoLocationOutline, IoArrowDownOutline, IoSparklesOutline } from 'react-icons/io5';
import './Hero.css';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const fullText = 'MAESTRO STUDIO';
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'ru')
    .substring(0, 2)
    .toLowerCase();
  const isRtl = i18n.dir(currentLang) === 'rtl';

  const letters = useMemo(() => fullText.split(''), [fullText]);

  const container = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.2 }
        : {
            duration: 0.5,
            ease: 'easeOut',
            staggerChildren: 0.04,
            delayChildren: 0.12,
          },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 28,
      rotateX: prefersReducedMotion ? 0 : 65,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="hero-wrapper" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="hero-bg-orb hero-bg-orb--1" aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb--2" aria-hidden="true" />
      <div className="hero-bg-spotlight" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <motion.div
          className="hero__meta-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <span className="hero__eyebrow">
            <IoSparklesOutline className="hero__eyebrow-icon" aria-hidden="true" />
            {t('hero.eyebrow', 'cinematic visuals • premium production • bold identity')}
          </span>
        </motion.div>

        <motion.h1
          className="hero__title"
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={fullText}
          dir="ltr"
        >
          <span className="hero__title-line">
            {letters.slice(0, 7).map((ch, i) => (
              <motion.span
                className="letter"
                key={`maestro-${ch}-${i}`}
                variants={child}
                aria-hidden="true"
              >
                {ch}
              </motion.span>
            ))}
          </span>

          <span className="hero__title-line hero__title-line--accent">
            {letters.slice(8).map((ch, i) => (
              <motion.span
                className="letter"
                key={`studio-${ch}-${i}`}
                variants={child}
                aria-hidden="true"
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
        >
          {t(
            'hero.lead',
            'Visual storytelling, stage energy, production design, and digital presence built to hit hard and stay in memory.'
          )}
        </motion.p>

        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
        >
          {t('hero.text')}
        </motion.p>

        <motion.div
          className="hero__highlights"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5 }}
        >
          <span className="hero__chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            {t('hero.highlight1', 'creative direction')}
          </span>
          <span className="hero__chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            {t('hero.highlight2', 'photo & video production')}
          </span>
          <span className="hero__chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            {t('hero.highlight3', 'brand atmosphere')}
          </span>
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.45 }}
        >
          <motion.a
            href={t('hero.ctaLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-button hero-cta-button--primary"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.025, y: -2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            <FaWhatsapp className="hero__whatsapp-icon" aria-hidden="true" />
            <span>{t('hero.button')}</span>
          </motion.a>

          <Link
            to="gallery"
            smooth
            offset={-72}
            duration={550}
            className="hero-cta-button hero-cta-button--secondary"
          >
            <span>{t('hero.secondaryButton', 'Explore Our Work')}</span>
            <IoArrowDownOutline className="hero__secondary-icon" aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          className="hero__location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.92, duration: 0.5 }}
        >
          <IoLocationOutline className="hero__location-icon" aria-hidden="true" />
          <span>{t('hero.locationBadge', 'Ashdod • K-Towers, 4th Floor')}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
