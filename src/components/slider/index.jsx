/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './styles.css'
const Slider = ({ children }) => {
    const sliderContentRef = useRef(null);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    const onHandleClickNext = () => {
        sliderContentRef.current.scrollLeft += sliderContentRef.current.children[0].offsetWidth;
    }

    const onHandleClickPrevious = () => {
        sliderContentRef.current.scrollLeft -= sliderContentRef.current.children[0].offsetWidth;
    }

    const onHandleMouseDown = (event) => {
        startX.current = event.pageX - sliderContentRef.current.offsetLeft;
        scrollLeft.current = sliderContentRef.current.scrollLeft;
    }

    const onHandleMouseLeave = (event) => {}

    const onHandleMouseUp = (event) => {}

    const onHandleMouseMove = (event) => {
        event.preventDefault();
        const x = event.pageX - sliderContentRef.current.offsetLeft;
        const walk = (x - startX.current) * 3;
        sliderContentRef.current.scrollLeft = scrollLeft.current - walk;
    }

    const onHandleTouchStart = (event) => {
        startX.current = event.touches[0].clientX - sliderContentRef.current.offsetLeft;
        scrollLeft.current = sliderContentRef.current.scrollLeft;
    }

    const onHandleTouchEnd = (event) => {}

    const onHandleTouchMove = (event) => {
        event.preventDefault();
        const x = event.touches[0].clientX - sliderContentRef.current.offsetLeft;
        const walk = (x - startX.current) * 3;
        sliderContentRef.current.scrollLeft = scrollLeft.current - walk;
    }

    return (
        <div className="slider">
            <button onClick={onHandleClickPrevious} type='button' className='previousButton'><span>&lt;</span></button>
            <button onClick={onHandleClickNext} type='button' className='nextButton'><span>&gt;</span></button>
            <div 
                ref={sliderContentRef} 
                className="sliderContent"
                onMouseDown={onHandleMouseDown}
                onMouseLeave={onHandleMouseLeave}
                onMouseUp={onHandleMouseUp}
                onMouseMove={onHandleMouseMove}
                onTouchStart={onHandleTouchStart}
                onTouchEnd={onHandleTouchEnd}
                onTouchMove={onHandleTouchMove}
            >
                {children}
            </div>
        </div>
    )
}

export default Slider;