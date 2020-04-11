import React from "react";
import md5 from "md5";

const Gravatar = (props) => {
	const { email } = props;
	const hash = md5(email);
	return (
		<img
			className={props.className}
			src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
		/>
	);
};

export default Gravatar;
