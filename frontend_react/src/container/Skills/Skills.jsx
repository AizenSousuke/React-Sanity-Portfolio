import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Skills = () => {
	const [skills, setSkills] = useState([]);
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		const query = `*[_type == "skills"]`;
		client.fetch(query).then((data) => {
			setSkills(data);
		});
		const experienceQuery = `*[_type == "experiences"]`;
		client.fetch(experienceQuery).then((data) => {
			setExperiences(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">Skills & Experience</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img
									src={urlFor(skill.icon)}
									alt={skill.name}
								/>
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				{/* <>
					{JSON.stringify(
						experiences.sort((a, b) => {
							const startA = parseInt(a.year);
							const startB = parseInt(b.year);
							return startB - startA;
						})
					)}
				</> */}
				<motion.div className="app__skills-exp">
					{experiences
						.sort((a, b) => {
							const startA = parseInt(a.year);
							const startB = parseInt(b.year);
							return startB - startA;
						})
						.map((experience) => (
							<motion.div
								className="app__skills-exp-item"
								key={experience.year}
							>
								<div className="app__skills-exp-year">
									<p className="bold-text">
										{experience.year}
									</p>
								</div>
								<motion.div className="app__skills-exp-works">
									{experience.works.map((work) => (
										<div key={work.name}>
											<motion.div
												whileInView={{
													opacity: [0, 1],
												}}
												transition={{ duration: 0.5 }}
												className="app__skills-exp-work"
												data-tip
												data-for={work.desc}
												key={work.name}
											>
												<h4 className="bold-text">
													{work.name}
												</h4>
												<p className="p-text">
													@{work.company}
												</p>
											</motion.div>
											<ReactTooltip
												id={work.desc}
												effect="solid"
												arrowColor="#fff"
												className="skills-tooltip"
											>
												{work.desc}
											</ReactTooltip>
										</div>
									))}
								</motion.div>
							</motion.div>
						))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
