import React, { Component } from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
	const [query, setQuery] = React.useState("");
	const [filteredBadges, setFilteredBadges] = React.useState(badges);
	React.useMemo(() => {
		const result = badges.filter((badge) => {
			return `${badge.firstName} ${badge.lastName}`
				.toLowerCase()
				.includes(query.toLowerCase());
		});

		setFilteredBadges(result);
	}, [badges, query]);

	return { setQuery, filteredBadges, query };
}

const BadgesList = (props) => {
	const badges = props.data;
	const { setQuery, query, filteredBadges } = useSearchBadges(badges);

	if (filteredBadges.length === 0) {
		return (
			<div>
				<div className="form-group">
					<label>Filter Badges</label>
					<input
						type="text"
						className="form-control"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</div>
				<h3>No badges</h3>
				<Link className="btn btn-primary" to="/badges/new">
					Create new badge
				</Link>
			</div>
		);
	}
	return (
		<div className="BadgesList">
			<div className="form-group">
				<label>Filter Badges</label>
				<input
					type="text"
					className="form-control"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</div>
			<ul className="list-unstyled">
				{filteredBadges.map((badge) => {
					return (
						<Link
							className="text-reset text-decoration-none"
							to={`/badges/${badge.id}`}>
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
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default BadgesList;
