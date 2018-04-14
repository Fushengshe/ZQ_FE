import React from 'react';
import { Spin } from 'antd';
import './loading.css';

const Loading = () => {


  return(
    <div className="side-loading">
      <Spin size="large"/>
    </div>
  );
};

export default Loading