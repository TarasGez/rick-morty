// Core
import React, { Component } from 'react';

// Styled
import Card from "./card.view.js";

export default class Character extends Component {
    render () {
        const character = this.props;

        return (
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
                    <li><em>type:</em> {character.type}</li>
                </Card.Info>
            </Card.Wrapper>
        );
    }
}