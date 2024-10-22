import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardProps from './interface/cardprops';

import {getData} from '../../database/getdata';

import { useState, useEffect } from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { ResponsiveContainer } from "recharts";

export default function ItemCard (props: CardProps): JSX.Element {

    const [data, setData] = useState<number[]>([0, 0, 0, 0, 0]);
    const [time, setTime] = useState<number[]>([0, 1, 2, 3, 4]);
    const [max, setMax] = useState<number>(0);

    useEffect(() => {
        getData(props).then((res) => {
            console.log(res);
            setData(res.count);
            setTime(res.time);
            setMax(Math.max(...res.count));
        });
    }, [props]);

    return (
        <Card sx={{ maxWidth: 345, width: '100%' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.ice_photo}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title} - {props.price}円
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
                <div style={{ width: '100%', height: 300, marginTop: 20 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data.map((value, index) => {
                                return {time: time[index], count: value};
                            })}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis domain={[0, max+5]} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
