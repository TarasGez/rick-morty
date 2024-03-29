// Core
import React, { Component } from 'react';

// Styled
import Card from "./card.view.js";

// Components
import CardPaper from "../CardPaper";

export default class Character extends Component {
    state = {
        cardView: false,
    }
    _showCard = () => {
        this.setState({
            cardView: !this.state.cardView,
        });
    }

    render () {
        const character = this.props;

        const type =  character.type ? <li><em>type:</em> {character.type}</li> : "";

        return (
            <div
                className = 'button'
                onClick = { this._showCard }>
                <CardPaper
                    character = { character }
                    className = { this.state.cardView ? 'fade' : 'hidden' }
                    click = { this._showCard }
                    display = { this.state.cardView }
                />
                <Card.Wrapper>
                    <Card.Image
                        src = { character.image }
                        title = { character.name }
                    />
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Info>
                        <li><strong><em>status:</em> {character.status}</strong></li>
                        <li><em>species:</em> {character.species}</li>
                        <li><em>gender:</em> {character.gender}</li>
                        {type}
                    </Card.Info>
                </Card.Wrapper>
            </div>
        );
    }
}
