import React, { Component } from 'react';

import styles from './Slider.scss';

function Slider(){
  return (
    <div className={styles.slider}>
      <div className={styles.button}>Category name</div>
      <div className={styles.button}>
      <div>Filter</div> 
      <svg className={styles.sortIcon} width={12} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xlink="http://www.w3.org/1999/xlink">
        <g>
          <g>
            <g>
              <path d="m496.1,138.3l-120.4-120.4c-7.9-7.9-20.6-7.9-28.5-7.10543e-15l-120.3,120.4c-7.9,7.9-7.9,20.6 0,28.5 7.9,7.9 20.6,7.9 28.5,0l85.7-85.7v352.8c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-352.8l85.7,85.7c7.9,7.9 20.6,7.9 28.5,0 7.9-7.8 7.9-20.6 5.68434e-14-28.5z"/>
              <path d="m287.1,347.2c-7.9-7.9-20.6-7.9-28.5,0l-85.7,85.7v-352.8c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5,0-7.9,7.9-7.9,20.6 0,28.5l120.4,120.4c7.9,7.9 20.6,7.9 28.5,0l120.4-120.4c7.8-7.9 7.8-20.7-0.1-28.5l0,0z"/>
            </g>
          </g>
        </g>
      </svg>

      </div>
    </div>
  )
}


export default Slider;