/* eslint-disable react/jsx-key */
import { useEffect, useState, useContext } from 'react'
import './styles.css'
import Input from '../../components/input';
import Card from '../../components/products/card';
import Loader from '../../components/loader';
import { useFetch } from '../../hooks/useFetch';
import { API_URLS } from '../../constants/index'
import { useNavigate } from 'react-router-dom';
import Slider from '../../components/slider';
import { CartContext } from '../../context/cart-context';
import CategoryItem from '../../components/categories/item';


function Home() {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [productFiltered, setProductFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const { setProducts, onAddToCart } = useContext(CartContext);

    const { data: products, loading: loadingProducts, error: errorProducts  } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config);
    const { data: categories, loading: loadingCategories, error: errorCategories  } = useFetch(API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config);

    const filterBySearch = (query) => {
        if(selectedCategory !== 'All' && query.length === 0) {
            onFilter(selectedCategory);
            return;
        }
        let updateProductList = query.length === 0 ? [...products] : [...productFiltered];

        updateProductList = updateProductList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        
        setProductFiltered(updateProductList);
    }

    const onChange = (event) => {
        const value = event.target.value;
        filterBySearch(value);
    }

    const onFocus = () => {
        setActive(true);
    }

    const onBlur = () => {
        setActive(false);
    }

    useEffect(() => {
        if(products?.length > 0) {
            setProducts(products);
        }
    }, [products, setProducts])

    const onShowDetails = (id) => {
        navigate(`/products/${id}`)
    }

    const onFilter = (name) => {
        setIsFiltered(true);
        const productsByCategory = products.filter((product) => product.category === name);
        setProductFiltered(productsByCategory);
        setSelectedCategory(name);
    }

    return (
        <>
        <div className='contentContainer'>
            <div className='categoriesContainer'>
                {loadingCategories ? <Loader /> : null}
                {errorCategories ? <h2>{errorCategories}</h2> : null}
                <Slider>
                    <CategoryItem name="All" onSelectCategory={() => setIsFiltered(false)} type='button' />
                {
                    categories.map((category) => (
                        <CategoryItem key={category.id} name={category.name} onSelectCategory={() => onFilter(category.name)} type='button' />
                    )) 
                }
                </Slider>
            </div>
            <div className='inputContainer'>
            {
            isFiltered ? ( 
                <Input 
                    placeholder='find a product'
                    id='task'
                    required={true}
                    name='Search'
                    label='Search'
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    active={active}
                />
            ) : null}   
           
            </div>
            <h2 className='headerTitleCard'>Products</h2>
            <div className='cardContainer'>
            {loadingProducts ? <Loader /> : null}
            {errorProducts ? <h2>{errorProducts}</h2> : null}
            {
                isFiltered ? (
                productFiltered.map((product) => (
                    <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
                ))
                ) : (
                products.map((product) => (
                    <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
                ))
                )
            }
            {
                isFiltered && productFiltered.length === 0 ? <h2>Products not found</h2> : null
            }
            </div>
        </div>
        </>
    )
}

export default Home
