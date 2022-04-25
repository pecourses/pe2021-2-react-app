import { useState } from 'react';
import styles from './Slide.module.scss';
import defaultImage from './defaultSpaceImage.jpg';

function Slide ({ slide: { title, description, src } }) {
  const [isHovered, setIsHovered] = useState(false); // При наведении показывается дополнительное описание

  return (
    <figure
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.slideFigure}
    >
      <img className={styles.slideImg} src={src ?? defaultImage} alt={title} />
      <figcaption className={styles.figcaption}>
        <h3>{title ?? 'The image title is missing'}</h3>
        {isHovered && (
          <p className={styles.description}>
            {description ?? 'The image description is missing'}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

export default Slide;
