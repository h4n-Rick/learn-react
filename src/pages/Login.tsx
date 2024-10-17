import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<div>Login</div>
			<button onClick={() => navigate(-1)}>返回</button>
		</>
	);
};

export default Login;
