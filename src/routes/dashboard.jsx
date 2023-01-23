import BlankCard from '~/components/BlankCard'
import FinanceCard from '~/components/FinanceCard'
import PurpleCard from '~/components/PurpleCard'
import QuickActions from '~/components/QuickActions'
import ScreenTitle from '~/components/ScreenTitle'
import Sidebar from '~/components/Sidebar'
import Tasks from '~/components/Tasks'

const Dashboard = () => {
	return (
		<div class='flex'>
			<Sidebar />
			<div class='m-8 flex flex-col w-full'>
				<ScreenTitle title='Welcome back, Harry!' />
				<div class='grid grid-cols-4 grid-rows-4 mt-10 h-full gap-3'>
					<QuickActions />
					<Tasks />
					<BlankCard />
					<PurpleCard />
					<PurpleCard />
					<FinanceCard />
					<PurpleCard />
					<PurpleCard />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
