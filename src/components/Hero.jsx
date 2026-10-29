import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import {
  IoLocationOutline,
  IoArrowDownOutline,
  IoArrowForwardOutline,
  IoCameraOutline,
  IoMicOutline,
  IoFilmOutline,
} from 'react-icons/io5';
import './Hero.css';

import imgPortrait from '../assets/gallery-1.png';
import imgStudio from '../assets/gallery-9.png';
import imgPodcast from '../assets/gallery-5.png';
import imgEditorial from '../assets/gallery-4.png';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'ru')
    .substring(0, 2)
    .toLowerCase();
  const isRtl = i18n.dir(currentLang) === 'rtl';

  const showcaseFrames = [
    {
      id: '01',
      src: imgPortrait,
      tag: t('hero.showcase.card1Tag', 'PORTRAIT & EDITORIAL'),
      title: t('hero.showcase.card1Title', 'Dramatic Low-Key Portraits'),
      meta: t('hero.showcase.card1Meta', '85MM F/1.4 • LOW-KEY'),
    },
    {
      id: '02',
      src: imgStudio,
      tag: t('hero.showcase.card2Tag', 'STUDIO & GEAR'),
      title: t('hero.showcase.card2Title', 'Pro Lighting & Rental Space'),
      meta: t('hero.showcase.card2Meta', 'SOFTBOX • MONITORS • SET'),
    },
    {
      id: '03',
      src: imgPodcast,
      tag: t('hero.showcase.card3Tag', 'PODCAST STUDIO'),
      title: t('hero.showcase.card3Title', 'Turnkey Multi-Cam Podcasts'),
      meta: t('hero.showcase.card3Meta', 'PRO AUDIO • 4K VIDEO'),
    },
    {
      id: '04',
      src: imgEditorial,
      tag: t('hero.showcase.card4Tag', 'CHARACTER & FASHION'),
      title: t('hero.showcase.card4Title', 'Editorial Visual Identity'),
      meta: t('hero.showcase.card4Meta', 'MONOCHROME • ART DIRECTION'),
    },
  ];

  const [activeFrame, setActiveFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % showcaseFrames.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, isPaused, showcaseFrames.length]);

  const currentFrame = showcaseFrames[activeFrame];

  const specs = [
    {
      num: '01',
      icon: IoFilmOutline,
      label: t('hero.highlight1', 'Creative Direction'),
    },
    {
      num: '02',
      icon: IoCameraOutline,
      label: t('hero.highlight2', 'Photo & Video 4K'),
    },
    {
      num: '03',
      icon: IoMicOutline,
      label: t('hero.highlight3', 'Podcasts & Rental'),
    },
  ];

  return (
    <section id="hero" className="hero-wrapper" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Subtle architectural key-light & vignette — no cheap neon orbs */}
      <div className="hero-keylight" aria-hidden="true" />
      <div className="hero-architecture-lines" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-split">
          {/* ================= LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTA ================= */}
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__topline">
              <span className="hero__status-pill" dir="ltr">
                <span className="hero__tally-dot" aria-hidden="true" />
                <span>{t('hero.statusBadge', 'STUDIO READY • ON AIR')}</span>
              </span>

              <span className="hero__topline-divider" aria-hidden="true" />

              <span className="hero__location-inline">
                <IoLocationOutline className="hero__location-icon" aria-hidden="true" />
                <span>{t('hero.locationBadge', 'Ashdod • K-Towers, 4th Floor')}</span>
              </span>
            </div>

            <div className="hero__title-block">
              <div className="hero__eyebrow-tag">
                {t('hero.eyebrow', 'cinematic visuals • premium production • bold identity')}
              </div>

              <h1 className="hero__title" aria-label="MAESTRO STUDIO" dir="ltr">
                <span className="hero__title-word hero__title-word--main">MAESTRO</span>
                <span className="hero__title-row-bottom">
                  <span className="hero__title-word hero__title-word--studio">STUDIO</span>
                  <span className="hero__title-stamp">
                    <span>PROD. HOUSE</span>
                    <small>EST. ASHDOD</small>
                  </span>
                </span>
              </h1>
            </div>

            <div className="hero__editorial-body">
              <p className="hero__lead">
                {t(
                  'hero.lead',
                  'Visual storytelling, stage energy, production design, and digital presence built to hit hard and stay in memory.'
                )}
              </p>
              <p className="hero__text">{t('hero.text')}</p>
            </div>

            <div className="hero__actions">
              <motion.a
                href={t('hero.ctaLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta hero-cta--primary"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              >
                <span className="hero-cta__icon-badge" aria-hidden="true">
                  <FaWhatsapp className="hero__whatsapp-icon" />
                </span>
                <span>{t('hero.button')}</span>
              </motion.a>

              <Link
                to="gallery"
                smooth
                offset={-72}
                duration={550}
                className="hero-cta hero-cta--secondary"
              >
                <span>{t('hero.secondaryButton', 'Explore Our Work')}</span>
                <IoArrowDownOutline className="hero__secondary-icon" aria-hidden="true" />
              </Link>
            </div>

            <div className="hero__specs" role="list">
              {specs.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div className="hero__spec-item" key={item.num} role="listitem">
                    <div className="hero__spec-head" dir="ltr">
                      <span className="hero__spec-num">{item.num}</span>
                      <IconComponent className="hero__spec-icon" aria-hidden="true" />
                    </div>
                    <span className="hero__spec-label">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: BENTO VISUAL SHOWCASE ================= */}
          <motion.div
            className="hero-bento"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Tall Cinema Monitor Stage */}
            <div className="hero-bento__stage">
              <span className="hero-bento__corner hero-bento__corner--tl" aria-hidden="true" />
              <span className="hero-bento__corner hero-bento__corner--tr" aria-hidden="true" />
              <span className="hero-bento__corner hero-bento__corner--bl" aria-hidden="true" />
              <span className="hero-bento__corner hero-bento__corner--br" aria-hidden="true" />

              <div className="hero-bento__hud-top" dir="ltr">
                <span className="hero-bento__hud-rec">
                  <span className="hero-bento__hud-dot" />
                  RAW 4K
                </span>
                <span className="hero-bento__hud-meta">{currentFrame.meta}</span>
                <span className="hero-bento__hud-counter">
                  {currentFrame.id} / 04
                </span>
              </div>

              <div className="hero-bento__stage-media">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentFrame.id}
                    src={currentFrame.src}
                    alt={currentFrame.title}
                    className="hero-bento__stage-img"
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  />
                </AnimatePresence>
                <div className="hero-bento__stage-gradient" aria-hidden="true" />
              </div>

              <div className="hero-bento__stage-footer">
                <div className="hero-bento__stage-info">
                  <span className="hero-bento__stage-tag">{currentFrame.tag}</span>
                  <h2 className="hero-bento__stage-title">{currentFrame.title}</h2>
                </div>

                <div className="hero-bento__dots" dir="ltr" role="tablist" aria-label="Studio frames">
                  {showcaseFrames.map((frame, idx) => (
                    <button
                      key={frame.id}
                      type="button"
                      role="tab"
                      aria-selected={activeFrame === idx}
                      aria-label={`Frame ${frame.id}: ${frame.title}`}
                      className={`hero-bento__dot ${activeFrame === idx ? 'is-active' : ''}`}
                      onClick={() => setActiveFrame(idx)}
                    >
                      <span>{frame.id}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Stack of Secondary Bento Cards */}
            <div className="hero-bento__side">
              <button
                type="button"
                className={`hero-bento__card ${activeFrame === 1 ? 'is-selected' : ''}`}
                onClick={() => setActiveFrame(1)}
              >
                <img
                  src={imgStudio}
                  alt={showcaseFrames[1].title}
                  className="hero-bento__card-img"
                />
                <div className="hero-bento__card-shade" aria-hidden="true" />
                <div className="hero-bento__card-top" dir="ltr">
                  <span className="hero-bento__card-index">02</span>
                  <span className="hero-bento__card-spec">LIGHT & GRIP</span>
                </div>
                <div className="hero-bento__card-bottom">
                  <span className="hero-bento__card-tag">{showcaseFrames[1].tag}</span>
                  <strong className="hero-bento__card-title">{showcaseFrames[1].title}</strong>
                </div>
              </button>

              <button
                type="button"
                className={`hero-bento__card ${activeFrame === 2 ? 'is-selected' : ''}`}
                onClick={() => setActiveFrame(2)}
              >
                <img
                  src={imgPodcast}
                  alt={showcaseFrames[2].title}
                  className="hero-bento__card-img"
                />
                <div className="hero-bento__card-shade" aria-hidden="true" />
                <div className="hero-bento__card-top" dir="ltr">
                  <span className="hero-bento__card-index">03</span>
                  <span className="hero-bento__card-spec">MULTI-CAM</span>
                </div>
                <div className="hero-bento__card-bottom">
                  <span className="hero-bento__card-tag">{showcaseFrames[2].tag}</span>
                  <strong className="hero-bento__card-title">{showcaseFrames[2].title}</strong>
                </div>
              </button>

              <Link
                to="gallery"
                smooth
                offset={-72}
                duration={550}
                className="hero-bento__gallery-card"
              >
                <div className="hero-bento__gallery-thumb-wrap">
                  <img
                    src={imgEditorial}
                    alt={showcaseFrames[3].title}
                    className="hero-bento__gallery-thumb"
                  />
                </div>
                <div className="hero-bento__gallery-meta">
                  <span className="hero-bento__gallery-kicker" dir="ltr">
                    +9 STUDIO FRAMES
                  </span>
                  <strong className="hero-bento__gallery-label">
                    {t('hero.showcase.allWorks', 'View Full Gallery')}
                  </strong>
                </div>
                <span className="hero-bento__gallery-arrow" aria-hidden="true">
                  <IoArrowForwardOutline />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
