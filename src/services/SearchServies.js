import * as HttpRequest from '~/untils/HttpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await HttpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('Lỗi');
    }
};
