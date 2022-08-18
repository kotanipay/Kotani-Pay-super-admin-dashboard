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
	PHONENUMBER = "Invalid PhoneNumber",
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
	const [name, setName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
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

	function isValidPhoneNumber(phoneNumber:string){
		// /^\+?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
		const phoneRegexp = /^\d{10}$/
		return phoneRegexp.test(phoneNumber)
	}

// Register
	const handleSubmit = (email:string,phoneNumber:string,password:string,name:string)=>{
	fetch("http://localhost:3001/create",{
		method: 'POST',
		headers:{
			"Content-type":"application/json"
		},
		body:JSON.stringify({
			email:email,
			phoneNumber: phoneNumber,
			password:password,
			name:name
		})
	})
	.then(response => response.json())
	.then(data=>console.log("Success", data) )
	.catch(error=> console.log("Error", error)
	)

	}
	
//Login
const handleLoginSubmit = ()=>{
	fetch("http://localhost:3001/login",{
		method: 'POST',
		headers:{
			"Content-type":"application/json"
		},
		body:JSON.stringify({
			phone: phoneNumber,
			password:password,
		})
	})
	.then(response => response.json())
	.then(data=>console.log("Success", data) )
	.catch(error=> console.log("Error", error)
	)

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
						label="PhoneNumber"
						largeLabel
						placeholder="0708861088"
						error={error}
						value={phoneNumber}
						onChange={event => {
							if (error) {
								setError("");
								return;
							}
							setPhoneNumber(event.target.value);
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
							if (!isValidPhoneNumber(phoneNumber) && !!phoneNumber) {
								setError(ErrorType.PHONENUMBER);
							}
							if (!isValidPassword(password) && !!password) {
								setPasswordErr(ErrorType.PASSWORD);
							}
							handleLoginSubmit()
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
						label="Name"
						largeLabel
						placeholder="Jane Doe"
						error={error}
						value={name}
						onChange={event => {
							if (error) {
								setError("");
								return;
							}
							setName(event.target.value);
						}}
					/>

					<Spacer className="h-6" />

					<Input
						label="PhoneNumber"
						largeLabel
						placeholder="0712345678"
						error={error}
						value={phoneNumber}
						onChange={event => {
							if (error) {
								setError("");
								return;
							}
							setPhoneNumber(event.target.value);
						}}
					/>

					<Spacer className="h-6" />

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
							if (!isValidPhoneNumber(phoneNumber) && !!phoneNumber) {
								setError(ErrorType.PHONENUMBER);
							}
							if (!isValidPassword(password) && !!password) {
								setPasswordErr(ErrorType.PASSWORD);
							}
							if (password && confirmPassword && password !== confirmPassword) {
								setPasswordErr(ErrorType.PASSWORD_MATCH);
							}
							handleSubmit(email,phoneNumber,password,name)
							
						}}
						>
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
