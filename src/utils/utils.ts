
  
const randomID = () => {
	return (
		String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
		String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
		Math.floor(1000 + Math.random() * 9000)
	);
}

function getDueDate(numberOfDays:number){
const days = numberOfDays;
const createdAt = new Date(Date.now());
const calcDate = new Date();
  const dueDate = new Date(calcDate.setDate(createdAt.getDate() + days));
return dueDate
}
export default{ randomID, getDueDate}