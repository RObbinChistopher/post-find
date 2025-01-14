import Home from "../views/Home.vue"; // Adjust based on the correct relative path
import productItems from "../views/productItems.vue";
import productList from '../components/productList/SideList.vue'
import inboxShow from '../components/inbox/show.vue'
import Category from "../views/Dashboard/MyAds/Category.vue";

// dashboard
import profile from '../views/Dashboard/Profile.vue'
import AddPost from '../views/Dashboard/MyAds/AddPost.vue'
import MyAds from "../views/Dashboard/MyAds/MyAd.vue";
import PublicProfile from "../views/Dashboard/PublicProfile.vue";
const routes = [
    { path: '/', component: Home, name: 'Home',meta: {showPostHeader: false}},
    { path: '/items', component: productItems, name: 'productItems',meta: {showPostHeader: false}},
    { path: '/items', component: productItems, name: 'productItems',meta: {showPostHeader: false}},
    { path: '/product-list', component: productList, name: 'productList',meta: {showPostHeader: false}},
    { path: '/inbox', component: inboxShow, name: 'inboxShow',meta: {showPostHeader: false}},

    // dashboard
    { path: '/edit-profile', component: profile, name: 'profile', meta: {showPostHeader: false}},
    { path: '/my-post', component: Category, name: 'Category',  meta: { showHeader: false, showFooter: false, showPostHeader: true,}},
    { path: '/ad-attributes', component: AddPost, name: 'AddPost',  meta: { showHeader: false, showFooter: false, showPostHeader: true,}},
    { path: '/my-ads', component: MyAds, name: 'MyAds',  meta: { showHeader: true, showFooter: true, showPostHeader: false,}},
    { path: '/public-profile', component: PublicProfile, name: 'PublicProfile',  meta: { showHeader: true, showFooter: true, showPostHeader: false,}},
]
export default routes;