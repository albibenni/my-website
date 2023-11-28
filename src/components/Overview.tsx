"use client";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { services } from "@/constants/recap";
import ServiceCard from "@/components/ServiceCard";
import { textVariant } from "@/utils/motion";
import Link from "next/link";

export default function Overview() {
  const blockOfText =
    "I'm a software engineer with experience in TypeScript,\n" +
    "          JavaScript and Java and expertise in frameworks like React, Node.js, and\n" +
    "          Spring. I'm a quick learner and I enjoy learning new thing to improve my skills.";
  const workTogether = `Let's work together!`;
  return (
    <div>
      <span className="hash-span" id={"overview"}>
        &nbsp;
      </span>
      <motion.div initial="hidden" animate="visible" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview</h3>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {blockOfText}
      </motion.p>
      <motion.p className="font-bold text-white text-[18px] max-w-3xl leading-[30px]">
        <Link href="/contact">{workTogether}</Link>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
