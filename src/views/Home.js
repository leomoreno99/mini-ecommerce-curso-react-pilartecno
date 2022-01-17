import { ListProduct } from '../components/Products/ListProducts'
import ProductFilter from '../components/Products/ProductFilter'

export const Home = ({history}) => {
    return (
        <>
        <ProductFilter history={history} />
        <ListProduct/>
        </>
    )
}
