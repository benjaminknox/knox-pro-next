import "./email-me.scss";
import Link from "next/link";

export const EmailMe = () => (
  <Link
    href="mailto:bknox.contact@gmail.com"
    className="email-me flex justify-center items-center"
  >
    Email Me
  </Link>
);
