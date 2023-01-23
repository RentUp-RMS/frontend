import { FiGrid } from 'solid-icons/fi'
import CardTitle from './CardTitle'

const QuickActions = () => {
	return (
		<div class='flex flex-col h-full bg-gray-800 p-4 rounded-xl row-span-2'>
			<CardTitle title='Quick Actions' />
			<div class='grid grid-cols-2 gap-4 p-3 h-full'>
				<QuickActionButton icon={<FiGrid size={24} />} />
				<QuickActionButton icon={<FiGrid size={24} />} />
				<QuickActionButton icon={<FiGrid size={24} />} />
				<QuickActionButton icon={<FiGrid size={24} />} />
				<QuickActionButton icon={<FiGrid size={24} />} />
				<QuickActionButton icon={<FiGrid size={24} />} />
			</div>
		</div>
	)
}

const QuickActionButton = ({ icon }) => {
	return (
		<div class='relative flex items-center justify-center h-full w-full mx-auto bg-gray-400 hover:bg-purple-600 dark:bg-purple-800 text-white hover:rounded-xl rounded-3xl transition-all duration-100 ease-linear cursor-pointer shadow-lg'>
			{icon}
		</div>
	)
}

export default QuickActions
