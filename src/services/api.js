import {collectionFields, productTypeFields, colors} from './fakeData'
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
export const getColors = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(colors);
    }, 1000);
  });
};
