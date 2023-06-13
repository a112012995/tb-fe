import React from 'react';

const Peta = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row gap-8">
				<div className="w-2/3">
					<img src="/peta.png" alt="" />
				</div>
				<div className="w-1/3">
					<div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-white ">
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text text-black">Gaya Peta</span>
								</label>
								<select class="select select-bordered select-error w-full max-w-xs bg-white">
									<option disabled="disabled" selected="selected">
										Choose one
									</option>
									<option>telekinesis</option>
									<option>time travel</option>
									<option>invisibility</option>
								</select>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-black">Wilayah</span>
								</label>
								<select class="select select-bordered select-error w-full max-w-xs bg-white">
									<option disabled="disabled" selected="selected">
										Choose one
									</option>
									<option>telekinesis</option>
									<option>time travel</option>
									<option>invisibility</option>
								</select>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-black">Kerentanan</span>
								</label>
								<select class="select select-bordered select-error w-full max-w-xs bg-white">
									<option disabled="disabled" selected="selected">
										Choose one
									</option>
									<option>telekinesis</option>
									<option>time travel</option>
									<option>invisibility</option>
								</select>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-black">Jumlah Kasus</span>
								</label>
								<select class="select select-bordered select-error w-full max-w-xs bg-white">
									<option disabled="disabled" selected="selected">
										Choose one
									</option>
									<option>telekinesis</option>
									<option>time travel</option>
									<option>invisibility</option>
								</select>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text text-black">Tahun</span>
								</label>
								<select class="select select-bordered select-error w-full max-w-xs bg-white">
									<option disabled="disabled" selected="selected">
										Choose one
									</option>
									<option>telekinesis</option>
									<option>time travel</option>
									<option>invisibility</option>
								</select>
							</div>

							<div className="form-control mt-6">
								<button className="btn btn-error">Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/3">
				<div className="card bg-white shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Keterangan</h2>
						<div className="flex gap-10">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#2DC937" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>Rendah</p>
									<p>0 - 10</p>
								</div>
							</div>
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#DB7B2B" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>Sedang</p>
									<p>11 - 25</p>
								</div>
							</div>
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#CC3232" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>Tinggi</p>
									<p>26 - 70</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Peta;
