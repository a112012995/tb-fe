import React from 'react';
import bannerBg from '../assets/bannerBg.png';
import bannerIcon from '../assets/bannerIcon.png';

const Banner = () => {
	const accessToken = localStorage.getItem('accessToken');
	return (
		<div className="h-full bg-no-repeat w-full bg-cover bg-bottom" style={{ backgroundImage: `url(${bannerBg})` }}>
			<div className="flex gap-20 mx-28">
				<div className="flex flex-col gap-3 mt-56 pl-10">
					<p className="text-4xl font-bold">Berantas Tuberkulosis!</p>
					<p className="text-sm w-[468px] font-sans">
						Bersama-sama, mari kita berantas tuberkulosis (TBC) dan menjaga dunia bebas dari penyakit yang mengancam ini! Wujudkan dalam gerakan kami untuk vaksinasi, edukasi, dan perawatan yang menyeluruh, demi mewujudkan masa depan yang
						sehat bagi semua.
					</p>
					<p className="text-[#EE6C4D] text-lg font-bold">Bersatu Kita Kalahkan TBC</p>
					<div className="mt-7">
						{accessToken && (
							<a href="/dashboard" className="bg-[#EE6C4D] rounded-full py-2 px-4 text-white font-bold text-lg ">
								Lihat Dashboard
							</a>
						)}
					</div>
				</div>
				<div className="drop-shadow-md ml-24 mt-[330px]">
					<img src={bannerIcon}/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
