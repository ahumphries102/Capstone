import React from 'react'

const magicList = (props)=>{
	const namesList = props.magicCards.map((magicCards, i)=>{
		return <li key={i}>{magicCards.name}<button class="ui button active">Button crap</button></li>
	})

	const manaCostList = props.magicCards.map((magicCards, i)=>{
		return <li key={i}>{magicCards.cmc}</li>
	})

	const colorsList = props.magicCards.map((magicCards, i)=>{
		return <li key={i}>{magicCards.colors}</li>
	})
	return(
		<div>
			<ul>
				{namesList}
				{manaCostList}
				{colorsList}
			</ul>
		</div>
	)
}

export default magicList