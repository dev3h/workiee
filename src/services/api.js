import {collectionFields, productTypeFields, womenColors, womenProducts} from './fakeData'
export const getCollections = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(collectionFields);
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
