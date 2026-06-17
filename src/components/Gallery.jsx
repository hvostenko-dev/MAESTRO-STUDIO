// src/components/Gallery.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__orb gallery__orb--1" aria-hidden="true" />
      <div className="gallery__orb gallery__orb--2" aria-hidden="true" />
      <div className="gallery__grid-bg" aria-hidden="true" />

      <div className="gallery__inner">
        <div className="gallery__header">
          <span className="gallery__eyebrow">
            {t('gallery.eyebrow', 'selected visuals')}
          </span>

          <h2 className="gallery__title">{t('gallery.title')}</h2>

          <p className="gallery__subtitle">
            {t(
              'gallery.subtitle',
              'A curated look at atmosphere, light, motion, and moments crafted with a cinematic eye.'
            )}
          </p>
        </div>

        <div className="gallery__grid">
          {images.map((src, idx) => (
            <div key={idx} className="gallery__item">
              <img
                src={src}
                alt={`${t('gallery.altPrefix')} ${idx + 1}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;