import React from 'react';
import { Spin } from 'antd';
import './slider.css';

const Loading = () => {


  return(
    <div className="slider-loading">
      <Spin size="large"/>
    </div>
  );
};

export default Loading