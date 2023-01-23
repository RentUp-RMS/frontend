import SearchBar from './SearchBar'
import TopNav from './TopNav'

const ScreenTitle = ({ title = 'ScreenTitle' }) => {
	return (
		<div class='flex justify-between w-full'>
			<h1 class='text-6xl text-white font-default drop-shadow-lg'>{title}</h1>
			<div class='flex pt-2'>
				<SearchBar />
				<TopNav />
			</div>
		</div>
	)
}

export default ScreenTitle
