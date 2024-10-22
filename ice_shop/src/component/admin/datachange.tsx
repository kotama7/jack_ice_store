import CardProps from "../home/interface/cardprops";

import { useState } from "react";

import { setData, MinasData } from "../../database/getdata";

export default function DataChange(props: CardProps){

    const [loading, setLoading] = useState<boolean>(false);
   
    const plus = () => {
        setLoading(true);
        setData(props).then(() => {
            console.log("plus");
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    const minas = () => {
        setLoading(true);
        MinasData(props).then(() => {
            console.log("minas");
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    if(loading){
        return (
            <div>
                <h1>loading...</h1>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>{props.title}</h1>
                <button onClick={plus}>プラス</button>
                <button onClick={minas}>マイナス</button>
            </div>
        );

    }
}