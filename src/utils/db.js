const apiUri = process.env.REACT_APP_BACK_URL;

// DATA FUNCTIONS
const getToken = () => 'asGJASGAeijasimkaSGASGjsa9231';

const getAuthData = (type, params) => {
  const token = getToken();
  const requestData = {
    method: type,
    headers: { Authorization: `Bearer ${token}` },
  };
  return requestData;
};

const contentAuthData = (type, body) => {
  const token = getToken();
  const requestData = {
    method: type,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  if (body) requestData.body = JSON.stringify(body);
  return requestData;
};

async function getResponseData(category, requestData, params) {
  const queryParams = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';
  const response = await fetch(
    `${apiUri}/${category}${queryParams}`,
    requestData,
  );
  const data = await response.json();
  const { status } = response;
  if (status >= 200 && status < 300) {
    return data;
  }
  return Promise.reject(data);
}

// GENERIC DB FETCHERS
async function dbGet(category, params) {
  const requestData = getAuthData('GET');
  const response = await getResponseData(category, requestData, params);

  return response;
}

async function dbPut(category, putData) {
  const requestData = contentAuthData('PUT', putData);
  const response = await getResponseData(category, requestData);

  return response;
}

async function dbPost(category, postData) {
  const requestData = contentAuthData('POST', postData);
  const response = await getResponseData(category, requestData);

  return response;
}

async function dbDelete(category, deleteData) {
  const requestData = contentAuthData('DELETE', deleteData);
  const response = await getResponseData(category, requestData);

  return response;
}

export { dbGet, dbPut, dbPost, dbDelete };
