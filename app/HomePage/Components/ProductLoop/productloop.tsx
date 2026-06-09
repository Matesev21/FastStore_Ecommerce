"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./productloop.module.css";
import { productHomeSectionMock } from "@/app/Mockdata/mockdata";
import Image from "next/image";
import Link from "next/link";

export const ProductLoop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productHomeSectionMock.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + productHomeSectionMock.length) % productHomeSectionMock.length
    );
  }, []);

  const selectSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // cycle every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/*<div className={styles.header}>
          <h2 className={styles.title}>Productos Destacados</h2>
          <div className={styles.titleLine}></div>
        </div>*/}

        <div className={styles.sliderWrapper}>
          {/* Prev Arrow Button */}
          <button 
            onClick={prevSlide} 
            className={`${styles.navButton} ${styles.prevButton}`} 
            aria-label="Anterior producto"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Slides Container */}
          <div className={styles.slidesContainer}>
            {productHomeSectionMock.map((product, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={product.id} 
                  className={`${styles.productSlide} ${isActive ? styles.active : ""}`}
                >
                  {/* Left Column: Product Details */}
                  <div className={styles.infoColumn}>
                    <span className={styles.badge}>Productos mas vendidos</span>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <div className={styles.actionRow}>
                      <Link href={`/product/${product.id}`} className={styles.catalogoButton}>
                        Ir al catálogo
                        <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Product Image */}
                  <div className={styles.imageColumn}>
                    <div className={styles.glowOverlay}></div>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={450} 
                        height={450} 
                        className={styles.productImage}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  
                </div>
              );
            })}

            {/* Pagination Dots */}
            <div className={styles.pagination}>
              {productHomeSectionMock.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
                  onClick={() => selectSlide(index)}
                  aria-label={`Ir al producto ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button 
            onClick={nextSlide} 
            className={`${styles.navButton} ${styles.nextButton}`} 
            aria-label="Siguiente producto"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};