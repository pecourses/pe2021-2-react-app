import { useEffect, useState } from 'react';

function ClickerCounter () {
  const [count, setCount] = useState(0);

  const clickHandler = () => setCount(count => count + 1);

  // componentDidMount() {
  //    document.title = `${count}`;
  //    document.body.addEventListener('click', clickHandler);
  // }
  //  componentDidUpdate() {
  //   document.title = `${count}`;
  // }
  // componentWillUnmount() {
  //   document.body.removeEventListener('click', clickHandler);
  // }

  useEffect(() => {
    // после каждого рендера (cdm+cdu)
    document.title = `${count}`;
  });

  useEffect(() => {
    document.body.addEventListener('click', clickHandler);
    return () => {
      document.body.removeEventListener('click', clickHandler);
    };
  });

  useEffect(() => {
    console.log('useEffect', count);
    return () => {
      console.log('useEffect reset', count);
    };
  }, [count]);

  return (
    <div style={{ height: '100vh' }}>
      <p>{console.log('render')}</p>
      <p>Count: {count}</p>
    </div>
  );
}

export default ClickerCounter;

// useEffect(() => {
//   // Побочный эффект после каждого рендера (cdm+cdu)
//   return () => {
//     // Сброс побочного эффекта перед следующим рендером
//     // (+ перед размонтированием)
//   };
// },[список зависимостей]);

// Если список зависимостей пустой ([]), то cdm+cwu

// Побочный эффект:
// - не требуют сброса:
// --- обращение к DOM
// --- подгрузка данных
// --- логгирование
// - требующие сброса:
// --- навешивание обработчиков
// --- таймауты/интервалы
