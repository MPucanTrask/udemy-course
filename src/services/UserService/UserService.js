const getFetchedData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (response.status !== 200) {
    throw new Error('Cannot fetch data');
  }
  // eslint-disable-next-line no-return-await
  return await response.json();
};

// eslint-disable-next-line import/prefer-default-export
export { getFetchedData };
