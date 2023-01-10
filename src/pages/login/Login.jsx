import { useState } from "react";
import "./login.scss";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [error, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/");
			})
			.catch((error) => {
				setError(true);
				console.log(error);
				// ..
			});
	};
	return (
		<div className="login">
			<form onSubmit={handleLogin}>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Login</button>
				{error && <span>Wrong Email or Password</span>}
			</form>
		</div>
	);
};

export default Login;
