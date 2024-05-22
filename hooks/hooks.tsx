import { useState, useEffect, useRef, RefObject } from 'react';


/**
 * 
 * @returns { number } height - высота элемента в пикселях
 * @returns { HTMLElement } ref - ссылка на HTML елемент (аналогично хуку useRef)
 */
export function useGetElementHeight(): [ number, RefObject<HTMLDivElement> ] {
  const [ height, setHeight ] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateHeight() {
      if (ref.current) {
        const element = ref.current;
        const computedStyle = getComputedStyle(element);
        const paddingTop = parseFloat(computedStyle.paddingTop);
        const paddingBottom = parseFloat(computedStyle.paddingBottom);
        const elementHeight = element.offsetHeight + paddingTop + paddingBottom;
        console.log(computedStyle.paddingTop)
        setHeight(element.offsetHeight);
      }
    }

    // Вызов при монтировании
    updateHeight();

    // Обновление высоты при изменении размеров окна
    window.addEventListener('resize', updateHeight);
    
    // Очистка события при размонтировании компонента
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return [ height, ref ];
}

