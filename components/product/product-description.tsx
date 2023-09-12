import { AddToCart } from 'components/cart/add-to-cart';
import { PriceDynamic } from 'components/cart/pricedynamic';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
 
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
         <div className="mr-auto w-auto rounded-full my-2 bg-blue-600 p-4 text-sm text-white">
          <h1>Price of MaxVariant</h1>
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          
          />
          
        
          </div> 
          <div className="mr-auto w-auto rounded-full my-2 bg-blue-600 p-4 text-sm text-white">
          <h1>Price of Selected</h1>
          <PriceDynamic variants={product.variants} availableForSale={product.availableForSale} />
          </div>      
          
          <div>
            <p>components/product/product-description</p>
          </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
        
      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
     {/*  <PriceDynamic variants={product.variants} availableForSale={product.availableForSale} /> */}
     {/* <div >
      {product.variants.map((variant, key)=> {return <div key={key} className="mr-auto w-auto rounded-full my-2 bg-blue-600 p-2 text-sm text-white">
        <h3> {variant.title}</h3>
        <Price
            amount={variant.price.amount}
            currencyCode={variant.price.currencyCode}
          
          />
       
        </div>})}
     </div> */}

    </>
  );
}
