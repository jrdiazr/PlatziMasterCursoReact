import React from "react";

class BadgeForm extends React.Component {
	state = {
		// firstName: "",
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleClick = (event) => {
		event.preventDefault();
	};
	handleSubmit = (event) => {
		event.preventDefault();
	};
	render() {
		const {
			firstName,
			lastName,
			email,
			jobTitle,
			twitterName,
		} = this.props.form;
		const handleChange = this.props.onChange;
		return (
			<div>
				<h1>New Attendant</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							onChange={handleChange}
							className="form-control"
							type="text"
							name="firstName"
							value={firstName}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							onChange={handleChange}
							className="form-control"
							type="text"
							name="lastName"
							value={lastName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={handleChange}
							className="form-control"
							type="email"
							name="email"
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Job Name</label>
						<input
							onChange={handleChange}
							className="form-control"
							type="text"
							name="jobTitle"
							value={jobTitle}
						/>
					</div>
					<div className="form-group">
						<label>Twitter Name</label>
						<input
							onChange={handleChange}
							className="form-control"
							type="text"
							name="twitterName"
							value={twitterName}
						/>
					</div>
					<button className="btn btn-primary" onClick={this.handleClick}>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default BadgeForm;
