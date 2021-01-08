import SignIn from "../pages/auth/SignIn"
import SignUp from "../pages/auth/SignUp";
import Profile from '../pages/Profile'
import Timeline from '../pages/Timeline'
import {
    Layout as LayoutIcon,
    Sliders as SlidersIcon,
    Users as UsersIcon,
} from "react-feather";

  const authRoutes = {
    path: "/auth",
    name: "Auth",
    icon: UsersIcon,
    badgeColor: "secondary",
    badgeText: "12/24",
    children: [
        {
            path: "/auth/sign-in",
            name: "Sign In",
            component: SignIn
        },
        {
            path: "/auth/sign-up",
            name: "Sign Up",
            component: SignUp
        },
        {
            path: "/auth/reset-password",
            name: "Sign Up",
            component: SignUp
        }
        
    ]
};

 const pageRoutes = {
    path: "/do-an",
    name: "Đồ Án",
    icon: LayoutIcon,
    children: [
        {
            path: "/do-an/timeline",
            name: "Bản đồ di chuyển",
            component: Timeline
        },
        {
            path: "/do-an/profile",
            name: "Thông tin người dùng",
            component: Profile
        }
    ]
};
export const auth = [authRoutes];
export const page = [
    pageRoutes,
];
export default [
    pageRoutes,
    authRoutes,
];