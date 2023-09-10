import "./experience.scss";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import RightArrow from "@/svgs/right-arrow.svg";

interface ExperienceProps {
  logo?: ReactNode;
  content: string;
  companyUrl: string;
}

export const Experience = ({ logo, content, companyUrl }: ExperienceProps) => (
  <Link target="_blank" href={companyUrl}>
    <div className="flex flex-col sm:flex-row experience">
      <div className="flex content-center justify-center logo-wrapper">
        {logo}
      </div>
      <div className="content">{content}</div>
      <Image src={RightArrow} alt="Right arrow" className='hidden md:block' />
    </div>
  </Link>
);
