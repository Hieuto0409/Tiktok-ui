import Config from './Routes';
// Layout
import HeaderOnly from '~/layouts/HeaderOnly';
// Pages
import Home from '~/pages/Home/';
import Following from '~/pages/Following/';
import ProFile from '~/pages/profile/';
import Upload from '~/pages/Upload/';
import FeedBack from '~/pages/feedback';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: Config.Routes.Home, component: Home },
    { path: Config.Routes.Following, component: Following },
    { path: Config.Routes.Live, component: Live },
    { path: Config.Routes.ProFile, component: ProFile },
    { path: Config.Routes.Upload, component: Upload, layout: HeaderOnly },
    { path: Config.Routes.FeedBack, component: FeedBack, layout: HeaderOnly },
]; //không đăng nhập cũng xem đc
const privateRoutes = []; //phải đăng nhập mới xem đc
export { publicRoutes, privateRoutes };
