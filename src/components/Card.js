import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className="mw5 mv3 bg-light-blue dib br3  ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?set=set3`} alt="Logo" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;