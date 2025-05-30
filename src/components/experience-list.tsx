import Image from "next/image";
import { Blur } from "@/components/blur";
import "@/components/experience-list.scss";
import { Experience } from "@/components/experience";
import Accountable2YouLogo from "@/svgs/accountable2you-logo.svg";
import PhysnaLogo from "@/svgs/physna-logo.svg";
import ThangsLogo from "@/svgs/thangs-logo.svg";
import SiemensLogo from "@/svgs/siemens-logo.svg";
import ClearVoiceLogo from "@/svgs/clearvoice-logo.svg";

export const ExperienceList = () => (
  <section className="flex flex-col justify-center experience-list">
    <h1>Experience</h1>
    <Experience
      logo={<Image alt="Accountable2You" width={160} src={Accountable2YouLogo} />}
      content="As a DevOps Engineer at Accountable2You, I design and manage cloud infrastructure on AWS, using OpenTofu for infrastructure-as-code. I implemented Kubernetes for our APIs and workloads and build CI/CD pipelines using Bitbucket pipelines."
      companyUrl="https://accountable2you.com"
    />
    <Experience
      logo={<Image alt="Siemens" width={140} src={SiemensLogo} />}
      content="At Siemens, I help lead frontend development and UI/UX design, collaborating closely with stakeholders to design and implement high-quality, user-centric applications, optimizing performance, scalability, and security to support our global infrastructure and ambitious project goals."
      companyUrl="https://www.siemens.com"
    />
    <Experience
      logo={<Image alt="Physna" width={140} src={PhysnaLogo} />}
      content="Throughout my remarkable six-year journey with Physna, I wholeheartedly dedicated myself to the company's visionary mission of simplifying complex 3D data for enterprise applications, employing a versatile technology stack to drive us toward groundbreaking innovations."
      companyUrl="https://physna.com"
    />
    <Experience
      logo={<Image alt="Thangs.com" width={150} src={ThangsLogo} />}
      content="During my enriching tenure at Physna, I had the privilege of contributing to Thangs.com, where we indexed the 3D data of the internet, I contributed on the front end. I was deeply committed to this mission, all while collaborating closely with a talented team of developers."
      companyUrl="https://thangs.com"
    />
    <Experience
      logo={<Image alt="ClearVoice" width={168} src={ClearVoiceLogo} />}
      content="My journey at ClearVoice started with a role as a Software Developer, I was thrilled to be part of their team, contributing to the development of their content marketing platform. It was a great experience, filled with opportunities to make an impact on the platform's growth and success."
      companyUrl="https://clearvoice.com"
    />
    <Blur />
  </section>
);
