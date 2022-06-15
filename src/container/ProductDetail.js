import { useParams } from "react-router-dom";
import { data } from "../data";

export const ProductDetail = () => {
  const params = useParams();

  console.log(params)

  let selectedItem;

  if (params) {
    selectedItem = data.find((item) => item.id === params.productId);
  }

  const renderBySeleectedItem = selectedItem ? (
    <>
      <h3>{selectedItem.item}</h3>
      <p>{selectedItem.id}</p>
    </>
  ) : <h2>Product not Found</h2>

  return (
    <section>
      <h1>Product Detail</h1>
      {renderBySeleectedItem}
    </section>
  );
};
