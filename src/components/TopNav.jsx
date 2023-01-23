const TopNav = () => {
	return (
		<div className='flex'>
			<TopNavItem icon={''} />
			<TopNavItem icon={''} />
			<TopNavItem icon={''} />
			<TopNavItem icon={''} />
		</div>
	)
}

const TopNavItem = ({ icon }) => {
	return (
		<div
			class='w-9 h-9 ml-1 mr-1 bg-gray-400 hover:bg-purple-600 dark:bg-gray-800 
    text-white
      hover:rounded-xl rounded-3xl
      transition-all duration-100 ease-linear
      cursor-pointer shadow-lg relative flex items-center justify-center'
		>
			{icon}
		</div>
	)
}

export default TopNav
