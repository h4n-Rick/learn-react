import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
	const navigate = useNavigate();

	function clickHandler() {
		navigate("/login");
	}

	return (
		<>
			<div>Home</div>
			<button onClick={clickHandler}>登录</button>
		</>
	);
};

export default Home;
