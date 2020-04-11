import React, { Component } from "react";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
		openModal: false,
	};

	handleCloseModal = (e) => {
		console.log("CerrarModal");

		this.setState({
			openModal: false,
		});
	};

	handleOpenModal = (e) => {
		console.log("abrir modal");

		this.setState({
			openModal: true,
		});
	};

	onDeleteBadge = async () => {
		this.setState({
			loading: true,
			error: null,
		});
		try {
			await api.badges.remove(this.props.match.params.badgeId);
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

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		this.setState({
			loading: true,
			error: null,
		});
		try {
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({
				loading: false,
				data: data,
			});
		} catch (error) {}
	}

	render() {
		if (this.state.loading === true) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError></PageError>;
		}
		console.log(this.state.data);

		return (
			<BadgeDetails
				onCloseModal={this.handleCloseModal}
				onOpenModal={this.handleOpenModal}
				onDeleteBadge={this.onDeleteBadge}
				openModal={this.state.openModal}
				badge={this.state.data}
			/>
		);
	}
}

export default BadgeDetailsContainer;
