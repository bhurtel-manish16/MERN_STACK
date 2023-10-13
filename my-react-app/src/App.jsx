import Welcome from "./components/Welcome";
import Shop from "./components/Shop";
import Child from "./components/Child";

function App() {
  const product_list = ["Apple", "Dell", "HP", "Asus", "LG", "XYZ", "ABC"];
  const shop_name = "ABCD PASAL";

  const click = () => {
    return console.log("Hi")
  }
  return (
    <div>
      {/* <Welcome /> */}
      {/* <Shop product_list={product_list} shop_name={shop_name}> </Shop> */}
      <Child>
        Hello from <b>App</b>
        <button onClick={click}>Click me</button><br></br>
      </Child>
    </div>
  );
}
export default App;
