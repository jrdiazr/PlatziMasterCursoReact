import React, { Component } from "react";
import "./styles/BadgesList.css";

class BadgesList extends Component {
	render() {
		return (
			<ul className="BadgesList list-unstyled">
				{this.props.data.map((badge) => {
					return (
						<li className="BadgesListItem" key={badge.id}>
							<img
								className="BadgesListItem__avatar"
								src={badge.avatarUrl}
								alt="Avatar"></img>
							<div>
								<span>
									{badge.firstName} {badge.lastName}
								</span>
								<a href="/">@{badge.twitter}</a>
								<p>{badge.jobTitle}</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgesList;
