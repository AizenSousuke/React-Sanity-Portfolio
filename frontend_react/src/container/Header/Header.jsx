import React, { useEffect, useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	const [files, setFiles] = useState([]);
	useEffect(() => {
		const query = `*[_type == "files"]`;
		client.fetch(query).then((data) => {
			setFiles(data);
		});
	}, []);

	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I am</p>
							<h1 className="head-text">Nik</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">
							I'm a<span className="tag-span">Web Developer</span>
						</p>
					</div>
				</div>
				<motion.div
					variant={scaleVariants}
					whileInView={scaleVariants.whileInView}
					className="app__header-circles-left"
				>
					{[images.api, images.git, images.javascript].map(
						(circle, index) => (
							<div
								className="circle-cmp app__flex"
								key={`circle-${index}`}
							>
								<img src={circle} alt="circle" />
							</div>
						)
					)}
				</motion.div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.profilehomepage} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
				{files?.length > 0 && (
					<div className="card p-0">
						<a
							href={files[0].FileURL}
							target="_blank"
							rel="noreferrer"
							alt="resume"
							title="Download my resume"
						>
							Download my resume
						</a>
					</div>
				)}
			</motion.div>
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[
					images.node,
					images.react,
					images.typescript,
					images.sass,
				].map((circle, index) => (
					<div
						className="circle-cmp app__flex"
						key={`circle-${index}`}
					>
						<img src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
