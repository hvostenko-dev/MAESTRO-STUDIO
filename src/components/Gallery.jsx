import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  IoExpandOutline,
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from 'react-icons/io5';
import './Gallery.css';

import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';
import img5 from '../assets/gallery-5.png';
import img6 from '../assets/gallery-6.png';
import img7 from '../assets/gallery-7.png';
import img8 from '../assets/gallery-8.png';
import img9 from '../assets/gallery-9.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const isRtl = i18n.dir(i18n.language) === 'rtl';

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, []);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id="gallery" className="gallery" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="gallery__container">
        <div className="gallery__eyebrow">
          {t('gallery.eyebrow', 'selected frames • studio sessions • visual craft')}
        </div>

        <h2 className="gallery__title">{t('gallery.title', 'Our Work')}</h2>

        <p className="gallery__subtitle">
          {t(
            'gallery.subtitle',
            'A look inside our studio sessions, lighting setups, portrait shoots, and production moments.'
          )}
        </p>

        <div className="gallery__grid">
          {images.map((src, idx) => (
            <motion.button
              key={idx}
              type="button"
              className="gallery__item"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`${t('gallery.viewImage', 'View full screen')}: ${t('gallery.altPrefix')} ${idx + 1}`}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <img
                src={src}
                alt={`${t('gallery.altPrefix')} ${idx + 1}`}
                loading="lazy"
                decoding="async"
              />
              <div className="gallery__overlay" aria-hidden="true">
                <span className="gallery__zoom-badge">
                  <IoExpandOutline />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${t('gallery.altPrefix')} ${selectedIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label={t('gallery.closeModal', 'Close preview')}
            >
              <IoCloseOutline />
            </button>

            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={showPrev}
              aria-label={t('gallery.prevImage', 'Previous image')}
            >
              <IoChevronBackOutline />
            </button>

            <motion.div
              className="gallery-lightbox__content"
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex]}
                alt={`${t('gallery.altPrefix')} ${selectedIndex + 1}`}
                className="gallery-lightbox__img"
              />
              <div className="gallery-lightbox__counter" dir="ltr">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>

            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={showNext}
              aria-label={t('gallery.nextImage', 'Next image')}
            >
              <IoChevronForwardOutline />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
