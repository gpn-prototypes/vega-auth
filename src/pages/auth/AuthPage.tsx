import * as React from 'react';
import { Carousel } from '@gpn-prototypes/vega-ui';

import { useAppContext } from '../../platform';
import { AuthForm } from '../../ui/features/auth';

import { cnAuthPage } from './cn-auth-page';

import './AuthPage.css';

export const AuthPage: React.FC = () => {
  const [idx, setIdx] = React.useState(0);
  const { identity } = useAppContext();

  const firstSlideCaption = 'Какой-то текст про Вега 2.0.';

  const secondSlideCaption =
    'Какой-то текст про то, какие задачи можно очень круто и быстро решать с помощью Веги 2.0.';

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
          <Carousel.Slide caption={firstSlideCaption} className={cnAuthPage('Slide')}>
            <div />
          </Carousel.Slide>
          <Carousel.Slide caption={secondSlideCaption} className={cnAuthPage('Slide')}>
            <div />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};
