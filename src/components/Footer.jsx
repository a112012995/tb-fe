import logoCOE from '../assets/logo-COE.png';

const Footer = () => {
	return (
		<div className="items-center text-center pt-52 pb-5">
			© Copyright by Tim TB
			<div className="flex justify-center items-center mt-3">
				<img src={logoCOE} alt="logo COE" className="w-[100px] h-[50px]" />
			</div>
		</div>
	);
};

export default Footer;
