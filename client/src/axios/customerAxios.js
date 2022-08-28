import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/customers/data";

const getCustomers = async (cb) => {
  try {
    let customer = await axios({
      method: "GET",
      url: URL,
    });
    cb(customer.data);
  } catch (e) {
    console.log(e);
  }
};

export { getCustomers };
