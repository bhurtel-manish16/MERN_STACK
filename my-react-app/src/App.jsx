import Welcome from "./components/Welcome";
import Shop from "./components/Shop";
import Child from "./components/Child";
import Count from "./components/Count";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import { useParams } from "react-router-dom";

function App() {
  const product_list = ["Apple", "Dell", "HP", "Asus", "LG", "XYZ", "ABC"];
  const shop_name = "ABCD PASAL";
  const val = useParams()
  console.log(val)

  const click = () => {
    return console.log("Hi");
  };
  return (
    <div>
      {/* <Welcome /> */}
      {/* <Shop product_list={product_list} shop_name={shop_name}> </Shop> */}
      {/* <Child>
        Hello from <b>App</b>
        <button onClick={click}>Click me</button><br></br>
      </Child> */}
      {/* <Count></Count> */}
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Welcome></Welcome>}></Route>
          <Route path="/Count" element={<Count></Count>}></Route>
          <Route
            path="/Shop"
            element={
              <Shop product_list={product_list} shop_name={shop_name}>
                {" "}
              </Shop>
            }
          ></Route>
          <Route path="/User/:id" element={<User></User>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
