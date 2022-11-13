import axios from 'axios';
const HttpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
// cách 1
// export const get = (path, options = {}) => {
//     return new Promise(function (resolve, reject) {
//         request.get(path, options).then((res) => {
//             console.log(res.data);
//             resolve(res.data);
//         });
// reject(console.log('sai'));
//     });
// };

// cách 2
export const get = async (path, options = {}) => {
    const response = await HttpRequest.get(path, options);
    return response.data;
};
export default HttpRequest;
