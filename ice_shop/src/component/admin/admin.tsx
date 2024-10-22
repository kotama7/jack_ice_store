import { useState } from 'react';
import DataChange from './datachange';

import { BarIce, GariGariKun, MikanIce, SpiralIce } from '../../data/ice_data';


export default function Admin() {

    const [password, setPassword] = useState<string>("");

    if (password !== "niitakayamanobore1208") {

        return (
            <div>
                <h1>Admin</h1>
                <input type="password" id='password' placeholder='パスワードを入力してください'></input>
                <button onClick={() => {
                    console.log((document.getElementById('password') as HTMLInputElement).value);
                    setPassword((document.getElementById('password') as HTMLInputElement).value)}}>ログイン</button>
            </div>
        );

    }
    else{

        return (
            <div>
                <h1>Admin</h1>
                <DataChange {...BarIce} />
                <DataChange {...GariGariKun} />
                <DataChange {...MikanIce} />
                <DataChange {...SpiralIce} />
            </div>
        );

    }
}  