import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CarouselControlPanel from './CarouselControlPanel';
import Slide from './Slide';
import styles from './Carousel.module.scss';

function Carousel ({ slides }) {
  const [delay, setDelay] = useState(5000); // Задержка при автоперелистывании
  const [isPaused, setIsPaused] = useState(true); // Остановлено ли автовоспроизведение
  const [isFullScreen, setIsFullScreen] = useState(false); // На весь ли экран, для него реализация не приведена
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Номер текущего слайда

  // Увеличить индекс текущего слайда
  const incSlideIndex = () => {
    setCurrentSlideIndex(
      currentSlideIndex => (currentSlideIndex + 1) % slides.length
    );
  };

  // Уменьшить индекс текущего слайда
  const decSlideIndex = () => {
    setCurrentSlideIndex(
      currentSlideIndex =>
        (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };

  // Когда меняется isPaused, delay, currentSlideIndex - для режима автовоспроизведения с задержкой уведичивать номер текущего слайда
  useEffect(() => {
    let timerId = null;
    if (!isPaused && !timerId) {
      timerId = setTimeout(() => {
        incSlideIndex();
      }, delay);
    }
    return () => {
      clearTimeout(timerId);
      timerId = null;
    };
  }, [isPaused, delay, currentSlideIndex]);

  return (
    <article className={styles.carouselContainer}>
      <Slide slide={slides[currentSlideIndex]} />
      <CarouselControlPanel
        isPaused={[isPaused, setIsPaused]}
        delay={[delay, setDelay]}
        isFullScreen={[isFullScreen, setIsFullScreen]}
        incSlideIndex={incSlideIndex}
        decSlideIndex={decSlideIndex}
      />
    </article>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
