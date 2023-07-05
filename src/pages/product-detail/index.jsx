import { useNavigate, useParams } from 'react-router-dom';
import Details from '../../components/products/details'
import { API_URLS } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import './styles.css'
import Loader from '../../components/loader';

function ProductDetail() {
    const { productId} = useParams();
    const navigate = useNavigate();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`

    const { data, loading, error  } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config);
    const history = window.history;

    return (
        <>
            <div className='headerDetailContainer'>
                {history.length > 2 ? (<button onClick={() => navigate(-1)} className='backButton'> &#8592; Back</button>) : null}
                <h2 className='headerTitleCard'>Product Detail</h2>
            </div>
            {loading && (
                <div className='loaderContainer'>
                    <Loader />
                </div>
            )}
            {error && <p>Something went wrong</p>}
            <Details {...data} />
        </>
    )
}

export default ProductDetail