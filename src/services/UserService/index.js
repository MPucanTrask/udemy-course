// eslint-disable-next-line import/named
import { getHost } from '../../config';

// eslint-disable-next-line consistent-return
const getFetchedResponse = async () => {
  const response = await fetch(getHost());
  try {
    if (response.status !== 200) {
      throw new Error('Cannot fetch data');
    }

    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    throw new Error(e);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getFetchedResponse };
