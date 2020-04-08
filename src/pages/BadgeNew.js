import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitterName: "",
		},
	};
	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};
	render() {
		const {
			firstName,
			lastName,
			email,
			jobTitle,
			twitterName,
		} = this.state.form;
		console.log("render");
		return (
			<>
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={firstName}
								lastName={lastName}
								avatar="https://www.gravatar.com/avatar/5c1d201dd2a65cc406fc3fe947c3871b"
								jobTitle={jobTitle}
								twitterUser={`@${twitterName}`}
								email={email}
							/>
						</div>
						<div className="col-6">
							<BadgeForm onChange={this.handleChange} form={this.state.form} />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default BadgeNew;
