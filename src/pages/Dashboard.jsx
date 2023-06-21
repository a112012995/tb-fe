import Navbar from '../components/navbar';
import Stats from '../components/Stats';
import Map from '../components/Map';
import bgHero from '../assets/bg-hero.png';
// import iconTb from '../assets/icon-tb.png';
import iconInfo from '../assets/icon-info.png';
import Footer from '../components/Footer';
import LineGraph from '../components/LineGraph';
import DropdownMenu from '../components/DropdownMenu';

const Dashboard = () => {
	return (
		<div className="bg-[#F6F6F6]">
			<div>
				<div
					className="flex flex-col min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
					style={{
						backgroundImage: `url(${bgHero})`,
					}}
				>
					<Navbar />
					<div className="pt-16 px-40">
						<div>
							<div className="text-4xl font-bold text-[#FFB800]">Selamat Datang,</div>
							<div className="text-6xl font-bold">Sistem Distribusi Kerentanan Penyakit Tuberkulosis</div>
						</div>
					</div>
				</div>
				<div className="flex space-x-8 justify-center items-center flex-col">
					<div className="-mt-[75px] card rounded-3xl w-fit bg-[#4F709C] drop-shadow-lg">
						<div className="flex pb-4 pt-3 px-10 flex-col">
							<div>
								<Stats />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-20 mt-36 text-black ">
				{/* <div className="flex justify-center items-center gap-5 px-20">
					<img src={iconTb} alt="icon tb" className="w-[500px] " />
					<p className="text-justify text-lg">
						Tuberkulosis (TB) adalah penyakit infeksi yang disebabkan oleh bakteri Mycobacterium tuberculosis. Penyakit ini umumnya menyerang paru-paru, tetapi juga dapat menyerang organ lain seperti ginjal, tulang, dan otak. Gejala utama
						TB paru meliputi batuk kronis, demam, kelelahan, dan penurunan berat badan. Penularan TB terjadi melalui udara saat seseorang yang terinfeksi batuk atau bersin. Penanganan TB melibatkan pengobatan jangka panjang dengan
						antibiotik untuk membasmi bakteri penyebabnya.
					</p>
				</div> */}
				<div className="mt-36">
					<LineGraph />
				</div>
				<div className="w-full mt-36">
					<Map />
				</div>
				<div className="mt-8 bg-[#E3F2FD] rounded-lg py-4 pl-4 border border-[#1565C0]">
					<div className="flex gap-2 items-center">
						<img src={iconInfo} alt="icon info" className="h-[20px] w-[20px]" />
						<h1>Disclaimer:</h1>
					</div>
					<p className="text-base px-11 text-justify">
						Peta di atas merupakan Peta Sebaran Kasus Tuberkulosis di Jawa Tengah dan bukan merupakan Peta Level Kewaspadaan Covid-19 Jawa Barat.
						<br />
						Tidak seluruh data kasus memiliki kelengkapan alamat Kota/Kab, Kecamatan dan Kelurahan/Desa (butuh proses verifikasi) sehingga tidak seluruhnya dapat divisualisasikan.
						<br />
						Data kasus diatas diupdate setiap hari, dan silahkan cek kembali secara reguler untuk mendapatkan informasi terbaru.
					</p>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Dashboard;
