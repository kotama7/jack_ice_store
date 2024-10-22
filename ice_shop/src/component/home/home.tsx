import MyAppBar from "./app_bar";
import ItemCard from "./item_card";

import { BarIce, GariGariKun, MikanIce, SpiralIce } from "../../data/ice_data";
import CardProps from "./interface/cardprops";

import "./home.css";

export default function Home(){
    return (
        <div>
            <MyAppBar/>
            <div className="container">
                <div className="ice-card"><ItemCard {...BarIce as CardProps}/></div>
                <div className="ice-card"><ItemCard {...GariGariKun as CardProps}/></div>
                <div className="ice-card"><ItemCard {...MikanIce as CardProps}/></div>
                <div className="ice-card"><ItemCard {...SpiralIce as CardProps}/></div>
            </div>
        </div>
    );
}