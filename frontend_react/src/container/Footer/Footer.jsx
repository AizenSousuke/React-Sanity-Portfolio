import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		// Create the object in sanity
		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text">Take a coffee and chat with me</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<a href="mailto:hello@nik.com" className="p-text">
						hello@nik.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="mobile" />
					<a href="tel:+6588888888" className="p-text">
						Call me
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							placeholder="Your name"
							className="p-text"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							type="text"
							placeholder="Your email"
							className="p-text"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<textarea
							placeholder="Your message"
							className="p-text"
							name="message"
							value={message}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<button
							type="button"
							className="p-text"
							onClick={handleSubmit}
						>
							{loading ? "Sending..." : "Send message"}
						</button>
					</div>
				</div>
			) : (
				<div>
					<h3 className="head-text">
						Thank you for getting in touch!
					</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
