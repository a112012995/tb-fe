import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const dispatch = useDispatch();
	const history = useNavigate();
	return (
		<div className="px-20 pt-12 pb-9 bg-none text-white">
			<div className="navbar ">
				<div className="navbar-start">
					<a href="/dashboard">
						<div className="flex items-center">
							<div>
								<img src="/logo_dkk.png" alt="logo" className="w-28 h-24" />
							</div>
							<div className="flex-col">
								<div className="font-semibold text-2xl">SDKPT</div>
								<div className="font-semibold text-2xl">Kota Semarang</div>
							</div>
						</div>
					</a>
				</div>
				<div className="navbar-end gap-12">
					<a href="#stats" className="text-2xl font-semibold scroll-smooth">
						Tentang
					</a>
					<a href="#map" className="text-2xl font-semibold scroll-smooth">
						Peta
					</a>
					<button>
						<div onClick={() => dispatch(logout(history))} className="text-2xl font-semibold scroll-smooth ">
							Logout
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
