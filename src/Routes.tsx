// import {RouteObject, useRoutes} from "react-router-dom";
// // import {IGlobalProps} from "./App.typing";
// import {PrivatePages} from "./components/PricatePages";
// import {MainPage} from "./pages/MainPage";
// import { CargoCatalogPage } from "./pages/CargoCatalogPage";
// import {CargoPage} from "./pages/CargoPage";
// export const AppRoutes = () => {
//     const routes: RouteObject[] = [
//         {
//             path: "/",
//             element: <PrivatePages/>,
//             children: [
//                 {
//                     path: "",
//                     element: <MainPage  />,
//                 },
//                 {
//                     path: "cargo_catalog",
//                     element: <CargoCatalogPage />,
//                 },
//                 {
//                     path: "cargo/:id",
//                     element: <CargoPage />,
//                 },

//             ],
//         },
//         // {
//         //     path: "/auth",
//         //     element: <AuthPage {...props} />,
//         // },
//         // {
//         //     path: "*",
//         //     element: <NotFoundPage />,
//         // },
//     ];
//     const routeResult = useRoutes(routes);
//     return <>{routeResult}</>;
// };

import {RouteObject, useRoutes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import { CargoCatalogPage } from "./pages/CargoCatalogPage";
import { CargoPage } from "./pages/CargoPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ShippingPage } from "./pages/CargoInShippingPage";
import { LoginPage } from "./pages/LoginPage";

export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "",
            element: <MainPage  />,
        },
        {
            path: "cargo_catalog/",
            element: <CargoCatalogPage  />,
        },
        {
            path: "cargo/:id",
            element: <CargoPage/>,
        },
        {
            path: "shipping/:id",
            element: <ShippingPage/>
        },
        {
            path: "/registration",
            element: <RegistrationPage/>,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },

    ];

    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};