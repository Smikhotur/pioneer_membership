import React, { FC, useEffect, useState } from 'react';
import { Membership } from './Membership';
import { Navigation } from './Navigation';
import { BlockIncome } from './BlockIncome';
import { BlockBenefit } from './BlockBenefit';
import { BlockRange } from './BlockRange';
import { BlockAfterUpgrade } from './BlockAfterUpgrade';
import { BlockQuestion } from './BlockQuestion';
import { BlockSubscribe } from './BlockSubscribe';
import { FormPayment } from './FormPayment';
import { ModalCongrats } from './ModalCongrats';
import { Switch, Route } from 'react-router-dom';
import Top1 from '../assets/images/memberships/Top1.jpg';
import '../assets/scss/style.scss';
import 'fontsource-aileron';
import '@fontsource/noto-serif';

export const PioneerMemberships: FC = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='memberships'>
      {scroll > 300 ? (
        <button onClick={handleUpButton} className='memberships__button-up'>
          <div className='arrow-down0'>
            <span className='arrow-down1'></span>
            <span className='arrow-down2'></span>
            <span className='arrow-down3'></span>
          </div>
          Up
        </button>
      ) : null}

      <div
        style={{
          background: `url(${Top1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='memberships__wrapper-nav'
      >
        <Navigation />
      </div>
      <div className='memberships__wrapper'>
        <Membership />
      </div>
      <div className='memberships__income'>
        <BlockIncome />
      </div>
      <div className='memberships__benefit'>
        <BlockBenefit />
      </div>
      <div className='memberships__range'>
        <BlockRange />
      </div>
      <div className='memberships__after-upgrade-wrapper'>
        <BlockAfterUpgrade />
      </div>
      <div className='memberships__question-wrapper'>
        <BlockQuestion />
      </div>
      <div className='memberships__subscribe-wrapper'>
        <BlockSubscribe />
      </div>
      <Switch>
        <Route path='/?cong-pionner=true' component={ModalCongrats} />
        <Route path='/' component={FormPayment} />
      </Switch>
    </div>
  );
};
