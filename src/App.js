import ImageWrapper from './components/ImageWrapper';

// поделиться с компонентом контентом и стилями

const App = () => (
  <ImageWrapper
    width='200px'
    height='200px'
    title='image'
    tabIndex={1}
    className='sfdfsdfsdf'
  >
    <img
      src='https://ichef.bbci.co.uk/news/640/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg'
      alt='Puppy'
    />
  </ImageWrapper>
);

export default App;
