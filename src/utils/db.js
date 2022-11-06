const apiUri = process.env.REACT_APP_BACK_URL;

// DATA FUNCTIONS
const getToken = () => 'asGJASGAeijasimkaSGASGjsa9231';

const getAuthData = (type) => {
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
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  if (body) requestData.body = JSON.stringify(body);
  return requestData;
};

async function getResponseData(category, requestData) {
  const response = await fetch(`${apiUri}/${category}`, requestData);
  const data = await response.json();
  const { status } = response;
  if (status >= 200 && status < 300) {
    return data;
  }
  return Promise.reject(data);
}

// GENERIC DB FETCHERS
async function dbGet(category) {
  const requestData = getAuthData('GET');
  const response = await getResponseData(category, requestData);

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

export {
  dbGet, dbPut, dbPost, dbDelete,
};
