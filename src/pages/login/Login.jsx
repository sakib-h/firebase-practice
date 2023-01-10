import { useState } from "react";
import "./login.scss";

const Login = () => {
	const [error, setError] = useState(false);
	const handleLogin = (e) => {
		e.preventDefault();
	};
	return (
		<div className="login">
			<form onSubmit={handleLogin}>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
				/>
				<button type="submit">Login</button>
				{error && <span>Wrong Email or Password</span>}
			</form>
		</div>
	);
};

export default Login;
