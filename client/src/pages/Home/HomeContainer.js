import React, { useEffect } from 'react';
import HomePresenter from './HomePresenter';
import axios from 'axios';

const HomeContainer = () => {
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:4000`,
    })
      .then(res => {
        console.log(('res:', res));
      })
      .catch(error => console.log(error));
  }, []);
  return <HomePresenter />;
};

export default HomeContainer;
