import { FilterListProduct } from '../components/Products/FilterListProducts'
import ProductFilter from '../components/Products/ProductFilter'

export const FilterProductsView = ({history, match}) => {
    return (
        <>
        <ProductFilter history={history} />
        <FilterListProduct match={match} />
        </>
    )
}
