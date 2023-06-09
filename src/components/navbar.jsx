import React from 'react';

const navbar = () => {
	return (
		<div className="px-3 py-1 bg-[#D8C4B6]">
			<div className="navbar ">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn bg-[#F5EFE7] hover:bg-[#F5EFE7] btn-circle btn-">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
							</svg>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#F5EFE7] text-black rounded-md w-52">
							<li>
								<a>Homepage</a>
							</li>
							<li>
								<a>Detail</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-center flex-row">
					<img src="/logo_dkk.png" alt="logo" className="w-16 h-14" />
					<a className="text-xl text-black">Dashboard</a>
				</div>
				<div className="navbar-end">
					<button className="btn bg-[#F5EFE7] hover:bg-[#F5EFE7] btn-circle">
						<div className="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
							<span className="badge badge-xs badge-primary indicator-item"></span>
						</div>
					</button>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" />
							</div>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#F5EFE7] rounded-md w-52 text-black">
							<li>
								<a className="justify-between">Profile</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default navbar;
