import React, { useEffect, useState } from 'react';
import { Carousel, Loader } from '@gpn-prototypes/vega-ui';

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

const testId = {
  carousel: 'AuthPage:Carousel',
};

type AuthPageType = React.FC & {
  testId: typeof testId;
};

export const AuthPage: AuthPageType = () => {
  const [idx, setIdx] = useState(0);
  const { identity, notifications } = useAppContext();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const useUnstableAuthSSO = localStorage.getItem('useUnstableAuthSSO');

    if (useUnstableAuthSSO === 'true') {
      // @ts-expect-error: ожидает типы
      identity?.authSSO().catch(() => {
        setIsLoading(false);

        const key = 'sso-error-alert';

        notifications.add({
          key,
          message: 'При входе возникла ошибка, войдите с помощью учетной записи',
          status: 'alert',
          onClose: () => {
            notifications.remove(key);
          },
        });
      });
    } else {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
        <Carousel
          currentIdx={idx}
          onChange={setIdx}
          className={cnAuthPage('TeaserCarousel')}
          testId={testId.carousel}
        >
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

AuthPage.testId = testId;
