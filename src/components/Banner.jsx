import React from 'react';
import bannerVector from '../assets/bannerImg.png';
import bannerImg from '../assets/Rectangle-86.png';

const Banner = () => {
	return (
		<div className="h-full bg-no-repeat w-full bg-cover bg-bottom" style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className="flex gap-20 mx-28">
				<div className="flex flex-col gap-3 mt-64">
					<p className="text-4xl font-bold">Berantas Tuberkulosis!</p>
					<p className="text-sm w-[468px] font-sans">
						Bersama-sama, mari kita berantas tuberkulosis (TBC) dan menjaga dunia bebas dari penyakit yang mengancam ini! Wujudkan dalam gerakan kami untuk vaksinasi, edukasi, dan perawatan yang menyeluruh, demi mewujudkan masa depan yang
						sehat bagi semua.
					</p>
					<p className="text-[#FF4E4E] text-lg font-bold">Bersatu Kita Kalahkan TBC</p>
				</div>
				<div className="drop-shadow-md mt-64">
					<img src={bannerVector} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
