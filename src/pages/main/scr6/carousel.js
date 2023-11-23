import React from 'react';
import PropTypes from 'prop-types';
import './carousel.css';
import useTransition from './useTransition';

export default function Carousel({ children, width, unit }) {
  const {translate, items, setAction,} = useTransition(width, children);

  const handleNext = () => setAction('next');
  const handlePrev = () => setAction('prev');

  return (
    <>
        <div 
            className="parent" 
            style={{width: `${width*3+200}${unit}`}}
        >
            <button className="prev" onClick={handlePrev}/>

            <div className="container">
                <div
                    className="inner"
                    style={{
                        width: `${width * items.length}${unit}`,
                        transform: `translateX(-${translate}${unit})`,
                    }}
                >
                    {items.map(item => (
                    <div
                        className="item"
                        style={{width: `${width}${unit}`}}
                    >
                        {item}
                    </div>
                    ))}
                </div>
            </div>
            <button className="next" onClick={handleNext}/>
        </div>
    </>  
)};

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  width: PropTypes.number,
  unit: PropTypes.string,
};

Carousel.defaultProps = {
  width: 300,
  unit: 'px',
};