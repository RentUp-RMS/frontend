import {
	FiGrid,
	FiLayout,
	FiPackage,
	FiDollarSign,
	FiTruck,
} from 'solid-icons/fi'

const Sidebar = () => {
	return (
		<div class='top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg'>
			<SideBarIcon icon={<FiGrid size={24} />} text='Dashboard' />
			<hr class='sidebar-hr' />
			<SideBarIcon icon={<FiLayout size={24} />} text='Jobs' />
			<SideBarIcon icon={<FiPackage size={24} />} text='Product Catalogue' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon={<FiDollarSign size={24} />} text='Finance' />
			<SideBarIcon icon={<FiTruck size={24} />} text='Vehicles' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
			<SideBarIcon icon='' text='' />
		</div>
	)
}

const SideBarIcon = ({ icon, text }) => (
	<div class='sidebar-icon group'>
		{icon}
		<span class='sidebar-tooltip group-hover:scale-100'>{text}</span>
	</div>
)

export default Sidebar
