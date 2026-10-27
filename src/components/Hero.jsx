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
  const isRtl = i18n.dir(i18n.language) === 'rtl';

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(EFFECT !== 'type');

  useEffect(() => {
    if (EFFECT !== 'type') return;

    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      setDoneTyping(true);
      return;
    }

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((i) => i + 1);
      }, 55);

      return () => clearTimeout(timeout);
    }

    setDoneTyping(true);
  }, [index, prefersReducedMotion, fullText]);

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
    <section className="hero-wrapper" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="hero-bg-orb hero-bg-orb--1" aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb--2" aria-hidden="true" />
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          {t(
            'hero.eyebrow',
            'cinematic visuals • premium production • bold identity'
          )}
        </motion.div>

        {EFFECT === 'stagger' ? (
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

            <span className="hero__title-line">
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
        ) : (
          <motion.h1
            className={`hero__title typing-title ${doneTyping ? 'done' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            dir="ltr"
          >
            <span className="hero__title-fixed">{displayedText}</span>
            {!prefersReducedMotion && <span className="cursor">|</span>}
          </motion.h1>
        )}

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
        >
          {t(
            'hero.lead',
            'Visual storytelling, stage energy, production design, and digital presence built to hit hard and stay in memory.'
          )}
        </motion.p>

        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {t(
            'hero.text',
            'We create cinematic photo and video production, visual concepts, brand atmosphere, and content that makes projects look powerful, clean, and unforgettable.'
          )}
        </motion.p>

        <motion.p
          className="hero__subtext"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.55 }}
        >
          {t(
            'hero.subtext',
            'From idea to final frame — every detail is built with style, rhythm, light, and emotion.'
          )}
        </motion.p>

        <motion.p
          className="hero__note"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.5 }}
        >
          {t(
            'hero.note',
            'For brands, artists, creators, events, and businesses that want their visuals to feel premium from the first second.'
          )}
        </motion.p>

        <motion.div
          className="hero__highlights"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92, duration: 0.5 }}
        >
          <span className="hero__chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            {t('hero.highlight1', 'creative direction')}
          </span>

          <span className="hero__chip">
            {t('hero.highlight2', 'photo & video production')}
          </span>

          <span className="hero__chip">
            {t('hero.highlight3', 'brand atmosphere')}
          </span>
        </motion.div>

        <motion.div
          className="hero__cta-wrap"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.08, duration: 0.45 }}
        >
          <motion.a
            href={t('hero.ctaLink')}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-button"
            whileHover={
              prefersReducedMotion ? undefined : { scale: 1.035, y: -3 }
            }
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          >
            <FaWhatsapp className="hero__whatsapp-icon" />
            {t('hero.button')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
