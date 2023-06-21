import logoUdinus from '../assets/logo-udinus.png';


const Footer = () => {
	return (
		<div className="items-center text-center pt-52 pb-5">
			© Copyright by Tim TB
			<div className="flex justify-center items-center mt-3">
				<img src={logoUdinus} alt="logo Udinus" className="w-[70px] h-[70px]" />
				<img src="/logo_dkk.png" alt="logo udinus" className="w-28 h-24" />
			</div>
		</div>
	);
};

export default Footer;
