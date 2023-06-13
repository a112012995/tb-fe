import Peta from '../components/Peta';
import Tabel from '../components/Tabel';
import Navbar from '../components/navbar';
import { useState } from 'react';

const Dashboard = () => {
	const [changeStatus, setChangeStatus] = useState('0');

	const renderStatus = () => {
		if (changeStatus === '1') return <Peta />;
		else if (changeStatus === '2') return <Tabel />;
		return <Peta />;
	};

	return (
		<div className="bg-[#F5EFE7]">
			<Navbar />
			<div className="px-12 pt-24 text-black ">
				<div className=" text-2xl font-bold">Ringkasan Data</div>
				<div className="flex gap-10 mt-5 ">
					<div className="card w-96 glass">
						<div className="card-body">
							<div className="stat">
								<div className="stat-title ">Total Page Views</div>
								<div className="stat-value">89,400</div>
							</div>
							<div className="card-actions justify-end">
								<div className="stat-desc">21% more than last month</div>
								<button className="btn btn-primary">Learn now!</button>
							</div>
						</div>
					</div>
					<div className="card w-96 glass">
						<div className="card-body">
							<h2 className="card-title">Life hack</h2>
							<p>How to park your car at your garage?</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Learn now!</button>
							</div>
						</div>
					</div>
					<div className="card w-96 glass">
						<div className="card-body">
							<h2 className="card-title">Life hack</h2>
							<p>How to park your car at your garage?</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Learn now!</button>
							</div>
						</div>
					</div>
					<div className="card w-96 glass">
						<div className="card-body">
							<h2 className="card-title">Life hack</h2>
							<p>How to park your car at your garage?</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Learn now!</button>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-40  text-2xl font-bold">Grafik Data</div>
				<div className="flex gap-10 mt-4 justify-between">
					<img src="/grafik1.png" alt="grafik 1" />
					<img src="/grafik2.png" alt="grafik 2" />
					<img src="/grafik3.png" alt="grafik 3" />
				</div>
				<div className="mt-16">
					<button className="btn btn-error" onClick={() => setChangeStatus('1')}>
						Peta
					</button>
					<button className="btn btn-error ml-5" onClick={() => setChangeStatus('2')}>
						Tabel
					</button>
					<div className="mt-7 pb-5">{renderStatus()}</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Dashboard;
