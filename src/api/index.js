import queryString from 'query-string';
import CONFIGS from './../configs';

function loadUsers (options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: CONFIGS.RESULTS_ORDER,
    inc: CONFIGS.INCLUDUNG_RESULTS,
  };

  const realOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryStringifiedOptions = queryString.stringify(realOptions, {
    arrayFormat: 'comma',
  });

  return fetch(`${CONFIGS.BASE_URL}?${queryStringifiedOptions}}`).then(
    response => response.json()
  );
}

export default loadUsers;
