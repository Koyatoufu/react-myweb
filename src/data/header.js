import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiFries } from "react-icons/ci";

export const headerNav = [
    {
        title: "introduce",
        icon: <CiBaseball />,
        url: "/intro"
    },
    {
        title: "games",
        icon: <CiFries />,
        url: "/site"
    },
    {
        title: "portfolio",
        icon: <CiCoffeeCup />,
        url: "/port"
    },
    {
        title: "contact",
        icon: <CiCoins1 />,
        url: "/contact"
    }
];