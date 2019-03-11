import React, { Component } from 'react'
import Form from './Form'
export default class FrontPage extends Component {
    render() {
        return (
            <section className="infoContainer">
				<div className="introText" id="navIntro">
					<div className="introChildren">
						<article>
						<div>
							<h2>INTRO</h2>
							<p>Magic: The Gathering, also Magic or MTG, is a strategy card game created by Richard Garfield in 1993, and published by Wizards of the Coast. Magic holds the title of "Most Played Trading Card Game," and is currently published in English, Simplified Chinese, Traditional Chinese, French, German, Italian, Korean, Japanese, Portuguese, Russian and Spanish. Digitally, the game can be played in Magic Online and MTG Arena.
							</p>
						</div>
						<div>
						<h2>How to Play!</h2>
							<p>
								Magic is a battle of wits between you and your opponent. The game is fairly to simple grasp, but as you continue to play you will begin to notice the the complexity and depth of the game. For now though let's take a look at the anatomy of a card and understand what the heck is going!
							</p>
						</div>
						<div className="imgText">
						<img src="https://deckmaster.info/images/cards/AVR/269639-hr.jpg" alt="island"/>
						<div>
							<h2>Foundation of Magic: Lands</h2>
							<p>Here we have a land</p>
						</div>
							{/*<img src="https://i.pinimg.com/originals/ba/06/75/ba0675a338bfd02b61bfa8a329cd1960.png" alt="manasymbols" />*/}
						</div>
						</article>
						<Form email={this.props.email}/>
					</div>
				</div>
			</section>
        )
    }
}