import {
  blogs,
  categories,
  productTypeFields,
  womenColors,
  womenProducts,
} from "./fakeData";
export const getBlogs = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(blogs);
    }, 1000);
  });
};
export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
};
export const getProductTypes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productTypeFields);
    }, 1000);
  });
};
export const getWomenColors = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(womenColors);
    }, 1000);
  });
};
export const getWomenProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(womenProducts);
    }, 1000);
  });
};
export const getProductDetail = (id) => {
  id = parseInt(id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        womenProducts.find((item) => {
          return item.id === id;
        })
      );
    }, 1000);
  });
};
