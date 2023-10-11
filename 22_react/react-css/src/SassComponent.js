import React from 'react';
import './style/SassComponent.scss';

export default function SassComponent() {
  return (
    <>
      <div className="container">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
      </div>
      <div className="box yellow"></div>
      <button className="btn">Button</button>
      <button className="btn-primary">Button primary</button>
    </>
  );
}
