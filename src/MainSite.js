import ProductsList from "./ProductsList.js"

function MainSite({productsList}) {

  return (
      <div>
        <h2>Available products</h2>
        <ProductsList productsList={productsList}/>
      </div>
  );
}

export default MainSite;