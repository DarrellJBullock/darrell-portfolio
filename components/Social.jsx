import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DarrellJBullock" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/darrellbullock" },
  { icon: <FaInstagram />, path: "https://instagram.com/djb215" },
  { icon: <FaTwitter />, path: "https://x.com/djb215" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
