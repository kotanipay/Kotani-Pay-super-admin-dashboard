import type { NextPage } from "next";
import { Input } from "../components/input";
import { Spacer } from "../utils/spacer";
import OpenPassword from "../public/svgs/password-open.svg";
import ClosePassword from "../public/svgs/password-close.svg";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "../components/button";
import { AuthLayoutCard } from "../components/auth-layout-card";

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
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string>();
	const [email, setEmail] = useState<string>("");
	const [step, setStep] = useState<Steps>(Steps.SIGN_IN);
	const [showPassword, setShowPassword] = useState(false);
	const [passwordErr, setPasswordErr] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	function isEmailValid(email: string) {
		const emailRegexp = new RegExp(
			/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
		);

		return emailRegexp.test(email);
	}

	function isValidPassword(password: string) {
		const psswdRegexp = new RegExp(
			"^(?=.*[A-Za-z])(?=.{8,})(?=.*?[#?!@$%^&*-_0-9])"
		);

		return psswdRegexp.test(password);
	}

	return (
		<AuthLayoutCard>
			{step === Steps.SIGN_IN ? (
				<div>
					<p className="font-sans text-xl text-center text-neutral-900">
						Admin Sign in
					</p>

					<Spacer className="h-10" />

					<Input
						label="Email"
						largeLabel
						placeholder="user@email.com"
						error={error}
						value={email}
						onChange={event => {
							if (error) {
								setError("");
								return;
							}
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
								if (passwordErr) {
									setPasswordErr(undefined);
								}
								setPassword(event.target.value);
							}}
						/>
					</div>

					<Spacer className="h-3" />

					<div className="text-left w-full">
						<button
							onClick={() => {}}
							className="font-sans text-neutral-900 text-sm underline">
							I forgot my password
						</button>
					</div>

					<Spacer className="h-6" />

					<Button
						isFullWidth
						onClick={() => {
							if (!isEmailValid(email) && !!email) {
								setError(ErrorType.EMAIL);
							}
							// if (!isValidPassword(password) && !!password) {
							// 	setPasswordErr(ErrorType.PASSWORD);
							// }
						}}>
						Sign In
					</Button>

					<Spacer className="h-6" />

					<div className="font-sans text-neutral-900 text-sm text-center">
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
					</div>
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
							if (error) {
								setError(undefined);
								return;
							}
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
								if (passwordErr) {
									setPasswordErr("");
								}
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
							if (!isValidPassword(password) && !!password) {
								setPasswordErr(ErrorType.PASSWORD);
							}
							if (password && confirmPassword && password !== confirmPassword) {
								setPasswordErr(ErrorType.PASSWORD_MATCH);
							}
						}}>
						Sign Up
					</Button>

					<Spacer className="h-6" />

					<div className="font-sans text-neutral-900 text-sm text-center">
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
					</div>
				</div>
			)}
		</AuthLayoutCard>
	);
};

export default Home;
