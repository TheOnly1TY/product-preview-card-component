export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f2ebe3] px-4 py-12">
      <div className="bg-white w-full rounded-[10px] overflow-hidden">
        <ProductImage />
        <ProductDescription />
      </div>
    </div>
  );
}

function ProductImage() {
  return (
    <figure>
      <img src="images/image-product-mobile.jpg" alt="product img" />
    </figure>
  );
}
function ProductDescription() {
  return (
    <div className="p-6">
      <ProductDetails />
      <ProductPrice />
      <CartButton />
    </div>
  );
}

function ProductDetails() {
  return (
    <div>
      <h3 className="tracking-[4px] text-[#6c7289] font-Montserrat uppercase">
        Perfume
      </h3>
      <h1 className="text-3xl text-[#1c232b] font-extrabold font-Fraunces my-2">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p className="text-[15px] text-[#6c7289] leading-6 font-Montserrat ">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
    </div>
  );
}

function ProductPrice() {
  return (
    <div className="flex gap-6 my-5">
      <span className="text-4xl font-bold text-[#3c8067] font-Fraunces">
        $149.99
      </span>
      <span className="text-base text-[#6c7289] line-through font-Montserrat">
        $169.99
      </span>
    </div>
  );
}

function CartButton() {
  return (
    <button className="flex justify-center items-center w-full h-12 gap-2 rounded-lg bg-[#3c8067]">
      <img src="images/icon-cart.svg" alt="cart_icon" />
      <span className="text-white font-semibold font-Montserrat">
        Add to Cart
      </span>
    </button>
  );
}
