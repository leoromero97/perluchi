export const getCategories = (items) => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    }
  );
};
