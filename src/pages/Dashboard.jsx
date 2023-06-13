import Navbar from '../components/navbar';

const Dashboard = () => {
	return (
		<div className="bg-[#F5EFE7]">
			<Navbar />
			<div className="px-12 pt-24 ">
				<div className="text-black text-2xl font-bold">Ringkasan Data</div>
				<div className="flex gap-10 mt-5 text-black">
					<div className="card w-96 glass">
						<div className="card-body">
							<div className="stat">
								<div className="stat-title text-black">Total Page Views</div>
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
				<div className="mt-24 text-black">ddddd</div>
				<div className="mt-24 text-black">ddddd</div>
				<div className="mt-24 text-black">ddddd</div>
				<div className="mt-24 text-black">ddddd</div>
			</div>
		</div>
	);
};

export default Dashboard;
