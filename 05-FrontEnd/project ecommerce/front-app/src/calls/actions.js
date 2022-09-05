import axios from "axios";

export async function loginUser(data) {
  return new Promise((resolve, reject) => {
    let url = `https://ecomerce-master.herokuapp.com/api/v1/login`;
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getAllItems() {
  return await new Promise((resolve, reject) => {
    let url = `https://ecomerce-master.herokuapp.com/api/v1/item`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export async function getItemsById(id) {
  console.log(`id ${id}`);
  return await new Promise((resolve, reject) => {
    let url = `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`;
    console.log(`url ${url}`);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
