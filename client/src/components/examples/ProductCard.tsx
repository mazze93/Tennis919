import ProductCard from '../ProductCard'
import productImg from '@assets/generated_images/retro_forest_green_windbreaker.png'

export default function ProductCardExample() {
  return (
    <div className="max-w-xs">
      <ProductCard 
        name="Retro Windbreaker" 
        price={89} 
        image={productImg}
        category="Winter Collection"
      />
    </div>
  )
}
