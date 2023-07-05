/* eslint-disable react/prop-types */
import './styles.css'
const Slider = ({ children }) => {
    return (
        <div className="slider">
            <button type='button' className='previousButton'><span>&lt;</span></button>
            <button type='button' className='nextButton'><span>&gt;</span></button>
            <div className="sliderContent">
                {children}
            </div>
        </div>
    )
}

export default Slider;