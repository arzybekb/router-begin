import { Link } from "react-router-dom";
import { data } from "../data";

export const Products = () => {
  return (
    <section>
      <ul>
        {data.map((item) => (
          <Link key={item.id} 
          to={`/products/${item.id}`}>
            <li>{item.item}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
