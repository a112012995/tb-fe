import React from "react";
import bgHero from '../assets/Rectangle-86.png';

const BeforeLogin = () => {
   return (
        <div className="bg-white">
            <div className="flex flex-col min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
            style={{
                backgroundImage: `url(${bgHero})`,
            }}>
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
                            <a href="#" className="text-2xl font-semibold scroll-smooth">
                                Tentang
                            </a>
                            <a href="#" className="text-2xl font-semibold scroll-smooth">
                                Peta
                            </a>
                            <div className="dropdown dropdown-end">
                            <button tabIndex={0} className="btn btn-square bg-[#35B438] text-white" style={{ width: '80px', height: '25px'}}>
                                <span className="login-text">Login</span> 
                                <span className="arrow-down">&#9660;</span>
                            </button>
                            
                            <div className="dropdown-content mt-3 p-2 shadow bg-[#F5EFE7] rounded-md w-52 text-black border border-black">
                                <button style={{ borderBottom: "1px solid black", width:"100%"}}>SDKTP</button>
                                <button style={{ borderTop: "1px solid black", width:"100%"}}>Semar Betul</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 px-40">
						<div>
							<div className="text-4xl font-bold text-[#FFB800]">Selamat Datang,</div>
							<div className="text-6xl font-bold">Sistem Distribusi Kerentanan Penyakit Tuberkulosis</div>
						</div>
					</div>
                </div>
            </div>
        </div>
        
   );
};

export default BeforeLogin;