import {RouteObject, useRoutes} from "react-router-dom";
// import {IGlobalProps} from "./App.typing";
import {PrivatePages} from "./components/PricatePages";
import {MainPage} from "./pages/MainPage";
import { CargoCatalogPage } from "./pages/CargoCatalogPage";
import {CargoPage} from "./pages/CargoPage";
export const AppRoutes = () => {
    const routes: RouteObject[] = [
        {
            path: "/",
            element: <PrivatePages/>,
            children: [
                {
                    path: "",
                    element: <MainPage  />,
                },
                {
                    path: "cargo_catalog",
                    element: <CargoCatalogPage />,
                },
                {
                    path: "cargo/:id",
                    element: <CargoPage />,
                },
                // /* {
                //   path: "basket",
                //   element: <BasketPage />,
                // }, */
                // {
                //     path: "about",
                //     element: <AboutPage />,
                // },
            ],
        },
        // {
        //     path: "/auth",
        //     element: <AuthPage {...props} />,
        // },
        // {
        //     path: "*",
        //     element: <NotFoundPage />,
        // },
    ];
    const routeResult = useRoutes(routes);
    return <>{routeResult}</>;
};