import React from 'react';
import { useState } from 'react';

const Tabel = () => {
	const [filterName, setFilterName] = useState('');
	const [filterJob, setFilterJob] = useState('');
	const [filterColor, setFilterColor] = useState('');

	const handleNameFilterChange = (e) => {
		setFilterName(e.target.value);
	};

	const handleJobFilterChange = (e) => {
		setFilterJob(e.target.value);
	};

	const handleColorFilterChange = (e) => {
		setFilterColor(e.target.value);
	};

	const data = [
		{ id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
		{ id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
		{ id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
	];

	const filteredData = data.filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()) && item.job.toLowerCase().includes(filterJob.toLowerCase()) && item.color.toLowerCase().includes(filterColor.toLowerCase()));

	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
					</tr>
					<tr>
						<th></th>
						<th>
							{' '}
							<input type="text" placeholder="Filter by Name" value={filterName} onChange={handleNameFilterChange} className="p-2 border rounded mr-2" />
						</th>
						<th>
							{' '}
							<input type="text" placeholder="Filter by Job" value={filterJob} onChange={handleJobFilterChange} className="p-2 border rounded mr-2" />
						</th>
						<th>
							{' '}
							<input type="text" placeholder="Filter by Favorite Color" value={filterColor} onChange={handleColorFilterChange} className="p-2 border rounded mr-2" />
						</th>
					</tr>
					<tr></tr>
				</thead>
				<tbody>
					{filteredData.map((item) => (
						<tr key={item.id}>
							<th>{item.id}</th>
							<td>{item.name}</td>
							<td>{item.job}</td>
							<td>{item.color}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Tabel;
