// Layouts
import { NoSidebar } from '../components/Layouts';

// Pages
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { Search } from '../pages/Search';

const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/detail',
        component: Detail,
        layout: NoSidebar,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoute = [];

export { publicRoute, privateRoute };
