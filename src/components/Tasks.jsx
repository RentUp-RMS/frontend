import CardTitle from './CardTitle'

const Tasks = () => {
	return (
		<div class='flex flex-col h-full bg-gray-800 p-4 rounded-xl row-span-2'>
			<CardTitle title='Tasks' />
			<div class='flex flex-col'>
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	)
}

const Task = () => {
	return (
		<div class='flex justify-between w-full items-center p-2'>
			<div class='form-control'>
				<label class='label cursor-pointer'>
					<input type='checkbox' class='checkbox mr-2' />
					<span class='text-m'>Remember me</span>
				</label>
			</div>
			<span class='badge'>Badge</span>
		</div>
	)
}

export default Tasks
