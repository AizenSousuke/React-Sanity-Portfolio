import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	useEffect(() => {
		const query = `*[_type == "works"]`;
		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				Applications I have <br />
				<span>Worked </span>
				On <span></span>
			</h2>
			<div className="app__work-filter">
				{[".NET", "HTML/JS/CSS", "Angular", "React JS", "All"].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${
								activeFilter === item ? "item-active" : ""
							}`}
						>
							{item}
						</div>
					)
				)}
			</div>

			<motion.div
				animate={animateCard}
				transition={{
					duration: 0.5,
					delayChildren: 0.5,
				}}
				className="app__work-portfolio"
			>
				{filterWork.length > 0 ? (
					filterWork.map((work, index) => (
						<div className="app__work-item app__flex" key={index}>
							<div className="app__work-img app__flex">
								<img
									src={urlFor(work.imgUrl)}
									alt={work.name}
								/>
								<motion.div
									whileHover={{ opacity: [0, 1] }}
									transition={{
										duration: 0.25,
										easy: "easeInOut",
										staggerChildren: 0.5,
									}}
									className="app__work-hover app__flex"
								>
									<a
										href={work.projectLink}
										target="_blank"
										rel="noreferrer"
									>
										<motion.div
											whileHover={{
												scale: [1, 0.9],
											}}
											whileInView={{
												scale: [0, 1],
											}}
											transition={{
												duration: 0.25,
											}}
											className="app__flex"
										>
											<AiFillEye />
										</motion.div>
									</a>
									<a
										href={work.codeLink}
										target="_blank"
										rel="noreferrer"
									>
										<motion.div
											whileHover={{
												scale: [1, 0.9],
											}}
											whileInView={{
												scale: [0, 1],
											}}
											transition={{
												duration: 0.25,
											}}
											className="app__flex"
										>
											<AiFillGithub />
										</motion.div>
									</a>
								</motion.div>
							</div>
							<div className="app__work-content app__flex">
								<h4 className="bold-text">{work.name}</h4>
								<p className="p-text" style={{ marginTop: 10 }}>
									<PortableText value={work.description} />
								</p>
								<div className="app__work-tag app__flex">
									<p className="p-text">{work.tags && work.tags[0]}</p>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="app__work-item app__flex">
						<div className="app__work-img app__flex">
							<p>
								Sorry no data is available. <br />
								Please try another filter.
							</p>
						</div>
					</div>
				)}
			</motion.div>
		</>
	);
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
