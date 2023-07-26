/* eslint-disable react/prop-types */
import './styles.css'

const CategoryItem = ({ onSelectCategory, type, name}) => {
    return (
        <button onClick={onSelectCategory} type={type} className='categoryContainer'>
            <p className='categoryName'>{name}</p>
        </button>
    )
}

export default CategoryItem