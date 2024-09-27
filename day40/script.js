let accessToken = "Access Token";
let isExpired = false;
let isRefreshToken = false;
let refreshTokenPromise = null;
const refreshToken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("New Access Token" + Math.random());
    }, 1000);
  });
};
const requestApi = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isRefreshToken && url === "/about") {
        isExpired = true;
      }
      if (isExpired) {
        reject("Token Expired");
      }
      resolve(`Data by Request ${url} with Token: ${accessToken}`);
    }, 1000);
  });
};
const httpClient = async (url) => {
  try {
    const response = await requestApi(url);
    return response;
  } catch (e) {
    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshToken();
    }
    const newAccessToken = await refreshTokenPromise;
    isExpired = false;
    isRefreshToken = true;
    accessToken = newAccessToken;
    const response = await requestApi(url);
    return response;
  }
};
httpClient("/profile").then((data) => {
  console.log(data);
});
httpClient("/courses").then((data) => {
  console.log(data);
});
httpClient("/posts").then((data) => {
  console.log(data);
});
httpClient("/about").then((data) => {
  console.log(data);
});
httpClient("/my-course").then((data) => {
  console.log(data);
});
