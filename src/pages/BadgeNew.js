import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";
import api from "../api";
import md5 from "md5";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeNew extends React.Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
			avatarUrl: "",
		},
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const hash = md5(this.state.form.email);
		const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
		console.log("entre", avatarUrl);

		this.setState({
			loading: true,
			error: null,
		});
		try {
			await api.badges.create({
				...this.state.form,
				avatarUrl,
			});
			this.setState({
				loading: false,
			});
			this.props.history.push("/badges");
		} catch (error) {
			this.setState({
				loading: false,
				error: error,
			});
		}
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
		const { firstName, lastName, email, jobTitle, twitter } = this.state.form;
		if (this.state.loading === true) {
			return <PageLoading></PageLoading>;
		}
		return (
			<>
				<div className="BadgeNew__hero">
					<img
						className="img-fluid BadgeNew__hero-image"
						src={header}
						alt="header"
					/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={firstName || "First Name"}
								lastName={lastName || "Last Name"}
								jobTitle={jobTitle || "Job Title"}
								twitterUser={`@${twitter || "Twitter User"}`}
								email={email || "Email"}
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								form={this.state.form}
								error={this.state.error}
								accion="New"
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default BadgeNew;
