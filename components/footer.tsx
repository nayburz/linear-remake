import { Container } from "./container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Intergrations",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Linear Method",
        href: "#",
      },
      {
        title: "Download",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Brand",
        href: "#",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        title: "API",
        href: "#",
      },
      {
        title: "Status",
        href: "#",
      },
      {
        title: "Github",
        href: "#",
      },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-grey py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex flex-row justify-between h-full lg:flex-col">
          <div className="flex items-center text-grey">
            <Logo className="w-4 h-4 mr-4" /> Linear - Designed worldwide
          </div>
          <div className="flex mt-auto space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div className="lg:min-w-[18rem] min-w-[50%] mt-10 lg:mt-0">
            <h3 className="pb-3 text-md">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="[&_a:last:mb-0">
                  <Link
                    className="block mb-3 transition-colors text-grey hover:text-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
