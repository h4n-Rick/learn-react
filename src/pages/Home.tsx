import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home: FC = () => {
	const navigate = useNavigate();

	function clickHandler() {
		navigate("/login");
	}

	return (
		<>
			<div>Home</div>
			<Button onClick={clickHandler}>登录</Button>
		</>
	);
};

export default Home;
