import "./login.scss";

const Login = () => {
	return (
		<div className="login">
			<form>
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
			</form>
		</div>
	);
};

export default Login;
