import "./email-me.scss";
import Link from "next/link";

export const EmailMe = () => (
  <>
    <Link
      href="mailto:ben@knoxes.email"
      className="email-me flex justify-center items-center"
    >
      Email Me
    </Link>

    <a href="https://www.buymeacoffee.com/benjaminknox" target="_blank" className="buy-me-a-coffee"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" /></a>
  </>
);
