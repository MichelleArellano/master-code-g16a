import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/'

export async function registerUserService (data) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/signup`
    axios
      .post(url, data)
      .then((response) => {
        console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export async function loginUserService (data) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/login`
    axios
      .post(url, data)
      .then((response) => {
        console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export async function getItems () {
  return await new Promise((resolve, reject) => {
    const url = `${BASE_URL}/item`
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export async function getItemsById (id) {
  console.log(`id ${id}`)
  return await new Promise((resolve, reject) => {
    const url = `${BASE_URL}/item/${id}`
    console.log(`url ${url}`)
    axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        resolve(response.data)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}
