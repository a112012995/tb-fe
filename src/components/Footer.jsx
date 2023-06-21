import logoUdinus from "../assets/logo-udinus.png";


const Footer = () => {
	return (
		<div className="items-center text-center pt-52 pb-5">
			© Copyright by Tim TB
			<div className="flex justify-center items-center mt-3">
				<img src={logoUdinus} alt="logo UDINUS" className="w-[100px] h-[100px]" />
				<img src="/logo_dkk.png" alt="logo" className="w-28 h-24" />
			</div>
		</div>
	);
};

export default Footer;