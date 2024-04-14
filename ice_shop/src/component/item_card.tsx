import React from 'react';

import { IgrCardModule, IgrCard, IgrCardHeader, IgrCardContent } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

import CardProps from './interface/cardprops';

IgrCardModule.register();

export default function ItemCard(props: CardProps): JSX.Element{

    return (
        <div className="container sample">
            <div className="card-wrapper">
                <IgrCard>
                    <div key="cardContainer" className="card-horizontal">
                        <div key="cardHeaderContainer">
                            <IgrCardHeader key="cardHeader">
                                <img key="headerImg" src={props.ice_photo} slot="thumbnail"></img>
                                <h5 key="headerTitle" slot="title">{props.title}</h5>
                            </IgrCardHeader>
                            <IgrCardContent key="cardContent">
                                <p key="content">{props.text}</p>
                            </IgrCardContent>
                        </div>
                        <div key="divider" className="divider"></div>
                    </div>
                </IgrCard>
            </div>
        </div>
    );
}
