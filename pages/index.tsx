import type { NextPage } from "next";
import { Input } from "../components/input";
import { Spacer } from "../utils/spacer";
import OpenPassword from "../public/svgs/password-open.svg";
import ClosePassword from "../public/svgs/password-close.svg";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "../components/button";
import { AuthLayoutCard } from "../components/auth-layout-card";
import PasswordValidator from "password-validator";
import { useApi } from "../utils/api";
import { useRouter } from "next/router";
import { checkAuthStatus } from "../utils/check-auth";

interface setPasswordIconProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}
export const SetPasswordIcon: React.FC<setPasswordIconProps> = ({
	open,
	setOpen,
}) => {
	return (
		<button
			className={classNames("absolute right-5 z-10", {
				"top-12": open,
				"top-[50px]": !open,
			})}
			onClick={() => setOpen(!open)}>
			{open ? <OpenPassword /> : <ClosePassword />}
		</button>
	);
};

enum ErrorType {
	EMAIL = "Invalid Email",
	PASSWORD = "Password should contain numbers and special characters",
	PASSWORD_MATCH = "Passwords do not match",
}
enum Steps {
	SIGN_IN = 1,
	SIGN_UP = 2,
}

const Home: NextPage = () => {
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string>();
	const [email, setEmail] = useState<string>("");
	const [loginError, setLoginError] = useState("");
	const [step, setStep] = useState<Steps>(Steps.SIGN_IN);
	const [showPassword, setShowPassword] = useState(false);
	const [passwordErr, setPasswordErr] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { submit: login, isLoading } = useApi("/api/login", {
		onSuccess() {
			router.push("/dashboard");
		},
		onError() {
			setLoginError("Invalid Credentials, Please try again");
		},
	});

	function onSubmit() {
		login({
			phone: email,
			password,
		});
	}

	function isEmailValid(email: string) {
		const emailRegexp = new RegExp(
			/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
		);

		return emailRegexp.test(email);
	}

	var schema = new PasswordValidator();

	schema.is().has().digits(1).has().symbols();

	return (
		<AuthLayoutCard>
			{step === Steps.SIGN_IN ? (
				<div>
					<p className="font-sans text-xl text-center text-neutral-900">
						Admin Sign in
					</p>

					<Spacer className="h-10" />

					<Input
						label="Phone Number"
						largeLabel
						placeholder="0719208393"
						error={error}
						value={email}
						onChange={event => {
							setError("");
							setEmail(event.target.value);
						}}
					/>

					<Spacer className="h-6" />

					<div className=" flex flex-col relative">
						<SetPasswordIcon open={showPassword} setOpen={setShowPassword} />
						<Input
							id="Password"
							largeLabel
							label=" Password"
							error={passwordErr}
							value={password}
							type={showPassword ? "text" : "password"}
							onChange={event => {
								setPasswordErr(undefined);
								setPassword(event.target.value);
							}}
						/>
					</div>

					<Spacer className="h-3" />

					{/* <div className="text-left w-full">
						<button
							onClick={() => {}}
							className="font-sans text-neutral-900 text-sm underline">
							I forgot my password
						</button>
					</div> */}

					<Spacer className="h-6" />

					<Button
						isFullWidth
						loading={isLoading}
						disabled={!email || !password || !!error || !!passwordErr}
						onClick={() => {
							// if (!isEmailValid(email) && !!email) {
							// 	setError(ErrorType.EMAIL);
							// }
							if (!schema.validate(password) && !!password) {
								setPasswordErr(ErrorType.PASSWORD);
								return;
							}

							onSubmit();
						}}>
						Sign In
					</Button>

					<Spacer className="h-6" />

					{loginError ? (
						<p className="text-center text-secondary-200 text-sm font-sans">
							{loginError}
						</p>
					) : null}

					<Spacer className="h-6" />

					{/* <div className="font-sans text-neutral-900 text-sm text-center">
						Don’t have an account?{" "}
						<button
							className="text-primary-100"
							onClick={() => {
								setStep(Steps.SIGN_UP);
								setPassword("");
								setPasswordErr(undefined);
							}}>
							Sign up
						</button>
					</div> */}
				</div>
			) : (
				<div>
					<p className="font-sans text-xl text-center text-neutral-900">
						Admin Sign up
					</p>

					<Spacer className="h-10" />

					<Input
						label="Email"
						largeLabel
						placeholder="user@email.com"
						error={error}
						value={email}
						onChange={event => {
							setError(undefined);

							setEmail(event.target.value);
						}}
					/>

					<Spacer className="h-6" />

					<div className=" flex flex-col relative">
						<SetPasswordIcon open={showPassword} setOpen={setShowPassword} />
						<Input
							id="Password"
							largeLabel
							label=" Password"
							error={passwordErr}
							value={password}
							type={showPassword ? "text" : "password"}
							onChange={event => {
								setPasswordErr("");
								setPassword(event.target.value);
							}}
						/>
					</div>

					<Spacer className="h-6" />

					<div className=" flex flex-col relative">
						<SetPasswordIcon
							open={showConfirmPassword}
							setOpen={setShowConfirmPassword}
						/>
						<Input
							id="Password"
							largeLabel
							value={confirmPassword}
							label="Confirm Password"
							type={showConfirmPassword ? "text" : "password"}
							onChange={event => {
								setConfirmPassword(event.target.value);
							}}
						/>
					</div>

					<Spacer className="h-6" />

					<Button
						isFullWidth
						onClick={() => {
							if (!isEmailValid(email) && !!email) {
								setError(ErrorType.EMAIL);
							}
							if (!schema.validate(password) && !!password) {
								setPasswordErr(ErrorType.PASSWORD);
							}
							if (password && confirmPassword && password !== confirmPassword) {
								setPasswordErr(ErrorType.PASSWORD_MATCH);
							}
						}}>
						Sign Up
					</Button>

					<Spacer className="h-6" />

					{/* <div className="font-sans text-neutral-900 text-sm text-center">
						Already have an account?{" "}
						<button
							className="text-primary-100"
							onClick={() => {
								setStep(Steps.SIGN_IN);
								setPassword("");
								setPasswordErr(undefined);
							}}>
							Sign In
						</button>
					</div> */}
				</div>
			)}
		</AuthLayoutCard>
	);
};

export default Home;

export const getServerSideProps = checkAuthStatus(false);
