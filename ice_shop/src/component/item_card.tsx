import React from 'react';

import { IgrCardModule, IgrCard, IgrCardHeader, IgrCardContent, IgrCardMedia, IgrCardActions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

import CardProps from './interface/cardprops';

IgrCardModule.register();

export default class ItemCard extends React.Component {

    constructor(props: CardProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="card-wrapper">
                    <IgrCard>
                        <div key="cardContainer" className="card-horizontal">
                            <div key="cardHeaderContainer">
                                <IgrCardHeader key="cardHeader">
                                    <img key="headerImg" src="https://static.infragistics.com/xplatform/images/music/rozes.jpg" slot="thumbnail"></img>
                                    <h5 key="headerTitle" slot="title">Rozes</h5>
                                    <h5 key="headerSubtitle" slot="subtitle">Under the Grave (2016)</h5>
                                </IgrCardHeader>
                                <IgrCardContent key="cardContent">
                                    <p key="content">As I have always said: I write what’s real and what’s true,
                                        even if it means throwing myself under the bus.</p>
                                </IgrCardContent>
                            </div>
                            <div key="divider" className="divider"></div>
                            <IgrCardActions key="cardActions">
                                <span key="actionsPrevious" className="material-icons">skip_previous</span>
                                <span key="actionsPlay" className="material-icons">play_arrow</span>
                                <span key="actionsNext" className="material-icons">skip_next</span>
                            </IgrCardActions>
                        </div>
                    </IgrCard>
                </div>
            </div>
        );
    }
}
