// import { Fragment } from "react";

import { useState } from "react";

function Shop({product_list, shop_name}) {
  // const product_list = ["Apple", "Dell", "HP", "Asus", "LG", "XYZ"];
//   let click_no = 0;
  //   Hook
  let [click_no, set_click_no] = useState(-1);
  
  //   const product_list = [];
  //   if (product_list.length === 0) {
  //     return (
  //       <>
  //         {" "}
  //         <h1>BHURTEL COMPUTER PASAL</h1>
  //         <p>No item found!</p>
  //       </>
  //     );
  //   }
  return (
    <>
      <h1>{shop_name}</h1>
      {/* {product_list.length == 0 ? <p>No item found!</p> : null} */}
      {product_list.length == 0 && <p>No item found!</p>}
      <ul className="list-group">
        {product_list.map((item, index) => (
          <li
            key={item}
            className={
              click_no == index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => set_click_no(index)} // click_no = index
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Shop;
