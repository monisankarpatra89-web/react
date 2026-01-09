import React from 'react';
import styles from './Card.module.css';

/**
 * A modern, responsive card component with a styled title and navigation links.
 * @param {object} props - The component props.
 * @param {string} props.title - The title to display on the card.
 * @param {Array<object>} props.links - An array of link objects. Each object should have 'text', 'url', and optionally 'external' (boolean).
 */
const Card = ({ title, links }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <nav className={styles.cardNav}>
        {
          links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.cardLink}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.text}
            </a>
          ))
        }
      </nav>
    </div>
  );
};

export default Card;
