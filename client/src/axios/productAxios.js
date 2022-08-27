import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/products/data";

const getProducts = async (cb) => {
  try {
    let products = await axios({
      method: "GET",
      url: URL,
    });
    cb(products.data);
  } catch (e) {
    console.log(e);
  }
};

export { getProducts };
