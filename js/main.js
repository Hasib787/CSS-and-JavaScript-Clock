
const secondHand= document.querySelector('.second_hand');
const minsHand= document.querySelector('.min_hand');
const hourHand= document.querySelector('.hour_hand');

function setDate(){
		const now=new Date();

			const seconds= now.getSeconds();
			const secondsDegrees = ((seconds/60)*360)+90;
			secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

			const mins= now.getMinutes();
			const minsDegrees = ((mins/60)*360)+90;
			minsHand.style.transform=`rotate(${minsDegrees}deg)`;

			const hours= now.getHours();
			const hourDegrees = ((hours/12)*360)+90;
			hourHand.style.transform=`rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 1000 );
