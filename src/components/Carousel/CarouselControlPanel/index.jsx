import React from 'react';

function CarouselControlPanel ({
  isFullScreen: [isFullScreen, setIsFullScreen],
  delay: [delay, setDelay],
  isPaused: [isPaused, setIsPaused],
  decSlideIndex,
  incSlideIndex,
}) {
  return (
    <>
      <button onClick={() => decSlideIndex()}>{'<'}</button>
      <button onClick={() => incSlideIndex()}>{'>'}</button>
      <button onClick={() => setIsPaused(isPaused => !isPaused)}>
        {isPaused ? 'Play' : 'Stop'}
      </button>
      <button onClick={setIsFullScreen(isFullScreen => !isFullScreen)}>
        fullscreen
      </button>
      <input
        type='number'
        min={1}
        max={10}
        value={delay / 1000}
        onChange={({ target: { value } }) => setDelay(Number(value) * 1000)}
      />
    </>
  );
}

export default CarouselControlPanel;
