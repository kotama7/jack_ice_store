import db from './database';

import {
    ref,
    set,
    push,
    get,
    query,
    equalTo,
    orderByChild,
  } from "firebase/database";

import CardProps from '../component/home/interface/cardprops';

async function getData(props: CardProps) {

    const RANGE = 4;

    const CurrentDate = new Date()
        .toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replaceAll("/", "");

    const CurrentTime = new Date().getHours();
    
    const queryRef = query(
        ref(db, `ice/${props.title}/log`),
        orderByChild("date"),
        equalTo(CurrentDate)
    );
    
    const snapshot = await get(queryRef);

    const data = Object.values(snapshot.val()) as { date: string, time: number, count: number }[];


    const result = {
        time: [] as number[],
        count: [] as number[],
    }
    

    for(let i = CurrentTime - RANGE; i <= CurrentTime; i++){

        let flag = false;
        let ind = i;

        if (i < 0) {
            ind = 24 + i;
        }

        for (let j = 0; j < data.length; j++) {
            if (data[j].time === ind) {
                result.time.push(ind);
                result.count.push(data[j].count);
                flag = true;
                break;
            }
        }
        if (!flag) {
            result.time.push(ind);
            result.count.push(0);
        }

    }
    console.log(result);
    return result;

}
async function setData(props: CardProps) {
    const CurrentDate = new Date()
        .toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replaceAll("/", "");

    const CurrentTime = new Date().getHours();

    const queryRef = query(
        ref(db, `ice/${props.title}/log`),
        orderByChild("date"),
        equalTo(CurrentDate)
    );

    try {
        const snapshot = await get(queryRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const allDiaries = Object.keys(data);
            let entryFound = false;

            for (let key of allDiaries) {
                if (data[key].time === CurrentTime) {
                    const iceRef = ref(db, `ice/${props.title}/log/${key}`);
                    await set(iceRef, {
                        date: CurrentDate,
                        time: CurrentTime,
                        count: data[key].count + 1,
                    });
                    entryFound = true;
                    break;
                }
            }

            if (!entryFound) {
                const newKey = push(ref(db, `ice/${props.title}/log`)).key;
                await set(ref(db, `ice/${props.title}/log/${newKey}`), {
                    date: CurrentDate,
                    time: CurrentTime,
                    count: 1,
                });
            }
        } else {
            const newKey = push(ref(db, `ice/${props.title}/log`)).key;
            await set(ref(db, `ice/${props.title}/log/${newKey}`), {
                date: CurrentDate,
                time: CurrentTime,
                count: 1,
            });
        }
    } catch (error) {
        console.error("Error updating data:", error);
    }
}

async function MinasData(props: CardProps) {
    const CurrentDate = new Date()
        .toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replaceAll("/", "");

    const CurrentTime = new Date().getHours();

    const queryRef = query(
        ref(db, `ice/${props.title}/log`),
        orderByChild("date"),
        equalTo(CurrentDate)
    );

    try {
        const snapshot = await get(queryRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const allDiaries = Object.keys(data);
            let entryFound = false;

            for (let key of allDiaries) {
                if (data[key].time === CurrentTime) {
                    const iceRef = ref(db, `ice/${props.title}/log/${key}`);
                    const newCount = data[key].count > 0 ? data[key].count - 1 : 0;
                    await set(iceRef, {
                        date: CurrentDate,
                        time: CurrentTime,
                        count: newCount,
                    });
                    entryFound = true;
                    break;
                }
            }

            if (!entryFound) {
                const newKey = push(ref(db, `ice/${props.title}/log`)).key;
                await set(ref(db, `ice/${props.title}/log/${newKey}`), {
                    date: CurrentDate,
                    time: CurrentTime,
                    count: 0,
                });
            }
        } else {
            const newKey = push(ref(db, `ice/${props.title}/log`)).key;
            await set(ref(db, `ice/${props.title}/log/${newKey}`), {
                date: CurrentDate,
                time: CurrentTime,
                count: 0,
            });
        }
    } catch (error) {
        console.error("Error updating data:", error);
    }
}


export { getData, setData, MinasData };