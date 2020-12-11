import * as React from 'react';
import { Carousel } from '@gpn-prototypes/vega-ui';

import { useAppContext } from '../../platform';
import { AuthForm } from '../../ui/features/auth';

import imgCreate from './images/carousel-create-project.png';
import imgRb from './images/carousel-rb.png';
import imgTotal from './images/carousel-total.png';
import { cnAuthPage } from './cn-auth-page';

import './AuthPage.css';

type Slide = {
  caption: string;
  img: string;
};

const slides: Slide[] = [
  { caption: 'Быстрое создание проекта', img: imgCreate },
  { caption: 'Удобное заполнение Ресурсной Базы и рисков', img: imgRb },
  { caption: 'Наглядный результат расчёта Ресурсной Базы ', img: imgTotal },
];

export const AuthPage: React.FC = () => {
  const [idx, setIdx] = React.useState(0);
  const { identity } = useAppContext();

  return (
    <div className={cnAuthPage()}>
      <AuthForm
        isFetching={false}
        // @ts-expect-error: ожидает типы
        onLogin={identity?.auth}
        containerClassName={cnAuthPage('FormContainer')}
        formClassName={cnAuthPage('Form')}
      />
      <div className={cnAuthPage('Teaser')}>
        <Carousel currentIdx={idx} onChange={setIdx} className={cnAuthPage('TeaserCarousel')}>
          {slides.map((slide) => (
            <Carousel.Slide
              key={slide.caption}
              caption={slide.caption}
              className={cnAuthPage('Slide')}
            >
              <div
                className={cnAuthPage('Image')}
                style={{ backgroundImage: `url(${slide.img})` }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
