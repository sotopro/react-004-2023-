/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useRef, memo } from 'react';
import './styles.css'

const Slider = memo(({ children }) => {
    const sliderContentRef = useRef(null);
    const startX = useRef(null);
    const scrollLeft = useRef(null);

    const onHandleClickNext = () => {
        sliderContentRef.current.scrollLeft += sliderContentRef.current.children[0].offsetWidth;
    }

    const onHandleClickPrevious = () => {
        sliderContentRef.current.scrollLeft -= sliderContentRef.current.children[0].offsetWidth;
    }

    const onHandleTouchStart = (event) => {
        startX.current = event.touches[0].clientX - sliderContentRef.current.offsetLeft;
        scrollLeft.current = sliderContentRef.current.scrollLeft;
    }

    const onHandleTouchEnd = (event) => {
        event.preventDefault();
    }

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
                onTouchStart={onHandleTouchStart}
                onTouchEnd={onHandleTouchEnd}
                onTouchMove={onHandleTouchMove}
            >
                {children}
            </div>
        </div>
    )
});

export default Slider;