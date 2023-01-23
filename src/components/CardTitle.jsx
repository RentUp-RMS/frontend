const CardTitle = ({ title = 'ScreenTitle' }) => {
	return (
		<div class='flex justify-between w-full'>
			<h1 class='text-2xl text-white font-default drop-shadow-lg'>{title}</h1>
		</div>
	)
}

export default CardTitle
