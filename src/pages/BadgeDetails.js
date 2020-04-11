import React from "react";
import ReacDOM from "react-dom";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

const BadgeDetails = (props) => {
	const { id, firstName, lastName, email, jobTitle, twitter } = props.badge;

	return (
		<div>
			<div className="BadgeDetails__hero">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src={confLogo} alt="Logo de la conferencia" />
						</div>
						<div className="col-6 BadgeDetails__hero-attendant-name">
							<h1>
								{firstName} {lastName}
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<Badge
							firstName={firstName}
							lastName={lastName}
							jobTitle={jobTitle}
							twitter={twitter}
							email={email}
						/>
					</div>
					<div className="col-6 BadgeDetails__hero-attendant-name">
						<h2>Actions</h2>
						<div className="">
							<Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>
								Edit
							</Link>
						</div>
						<button
							onClick={props.onOpenModal}
							className="btn btn-danger mb-4 delete-button">
							Delete
						</button>
						<DeleteBadgeModal
							onClose={props.onCloseModal}
							isOpen={props.openModal}
							onDeleteBadge={props.onDeleteBadge}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeDetails;
