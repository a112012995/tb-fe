import logoCOE from '../assets/logo-udinus.png';


const Footer = () => {
	return (
		<div className="items-center text-center pt-52 pb-5">
			© Copyright by Tim TB
			<div className="flex justify-center items-center mt-3">
				<img src={logoCOE} alt="logo Udinus" className="w-[70px] h-[70px]" />
				<img src="/logo_dkk.png" alt="logo udinus" className="w-24 h-23" />
			</div>
		</div>
	);
};

export default Footer;
