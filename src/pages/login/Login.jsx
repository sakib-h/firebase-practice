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
			</form>
		</div>
	);
};

export default Login;
