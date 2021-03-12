import React, { useState } from 'react';
import { Steps, Button } from 'antd';

const { Step } = Steps;

const DEFAULT_STYLE = {
  stroke: 'gray',
  strokeWidth: 1,
};
const DEFAULT_STYLE_Y = {
  stroke: 'red',
  strokeWidth: 1,
};
const LineChart = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div>
      <div>
        <Button onClick={prev}>Pre</Button>
        <Button onClick={next}>Next</Button>
      </div>
      <Steps current={current}>
        <Step title="第一步" description="绘制 x y轴" />
        <Step title="第二步" description="绘制折线" />
        <Step title="第三步" description="合成" />
      </Steps>
      {/* 绘制坐标轴 */}
      <svg width="400" height="200">
        <g className="layer" transform="translate(40,10)">
          {/* y 轴 */}
          <YAlias />
          {/* x 轴 */}
          <XAlias />
        </g>
      </svg>
      {/* 绘制数据 */}
      <svg width="400" height="200">
        <g className="layer" transform="translate(40,10)">
          <Data />
        </g>
      </svg>
      <svg width="400" height="200">
        <g className="layer" transform="translate(40,10)">
          {/*  数据点  */}
          <Data />
          {/* y 轴 */}
          <YAlias />
          {/* x 轴 */}
          <XAlias />
        </g>
      </svg>
    </div>
  );
};
const YAlias = () => {
  return (
    <g className="y axis">
      {/* <!-- y轴 --> */}
      <line x1="0" y1="0" x2="0" y2="120" style={DEFAULT_STYLE} />
       {/* <!-- y轴刻度 --> */}
      <line x1="-10" y1="105" x2="0" y2="105" style={DEFAULT_STYLE} />
      <line x1="-10" y1="90" x2="0" y2="90" style={DEFAULT_STYLE} />
      <line x1="-10" y1="60" x2="0" y2="60" style={DEFAULT_STYLE} />
      <line x1="-10" y1="30" x2="0" y2="30" style={DEFAULT_STYLE} />
      <line x1="-10" y1="0" x2="0" y2="0" style={DEFAULT_STYLE} />
      {/*  <!-- y轴头部箭头--> */}
      <g className="y top">
        <line x1="0" y1="0" x2="0" y2="-10" style={DEFAULT_STYLE_Y} />
        <line x1="0" y1="-10" x2="5" y2="-5" style={DEFAULT_STYLE_Y} />
        <line x1="0" y1="-10" x2="-5" y2="-5" style={DEFAULT_STYLE_Y} />
      </g>
      {/*  <!-- y轴刻度值 --> */}
      <text x="-30" y="105" dy="5">
        10
      </text>
      <text x="-30" y="0" dy="5">
        80
      </text>
    </g>
  );
};
const XAlias = () => {
  return (
    <g className="x axis" transform="translate(0, 120)">
      {/* <!-- X轴--> */}
      <line x1="0" y1="0" x2="290" y2="0" style={DEFAULT_STYLE} />
      {/*  <!-- x轴刻度 --> */}
      <line x1="30" y1="0" x2="30" y2="10" style={DEFAULT_STYLE} />
      <line x1="250" y1="0" x2="250" y2="10" style={DEFAULT_STYLE} />
      {/* <!-- X轴头部箭头--> */}
      <line x1="290" y1="0" x2="284" y2="-5" style={DEFAULT_STYLE} />
      <line x1="290" y1="0" x2="284" y2="5" style={DEFAULT_STYLE} />
      {/*  <!-- x轴刻度值 --> */}
      <text x="30" y="20">
        30
      </text>
      <text x="240" y="20">
        250
      </text>
    </g>
  );
};

const Data = () => {
  return (
    <g className="data">
       <circle r="5" cx="0" cy="105" fill="red" />
      <circle r="5" cx="180" cy="60" fill="red" />
      <circle r="5" cx="250" cy="0" fill="red" />
      {/*   <!-- 数据连接成线 --> */}
      <polyline points="0,105, 180,60 250,0" fill="none" stroke="black" />
    </g>
  );
};
export default LineChart;
