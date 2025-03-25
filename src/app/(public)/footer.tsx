import { title } from "process";
import "./footer.css";
import Link from "next/link";
import { Item } from "@radix-ui/react-dropdown-menu";

const menuFooter = [
  {
    title1: "URL Shortener",
    urlItem1: [
      {
        titleUrl: "Why Cuttly?",
        url: "/",
      },
      {
        titleUrl: "URL Shortener",
        url: "/",
      },
      {
        titleUrl: "Features & Pricing",
        url: "/",
      },
    ],
    title2: "Link Management",
    urlItem2: [
      {
        titleUrl: "API",
        url: "/",
      },
      {
        titleUrl: "Check url",
        url: "/",
      },
      {
        titleUrl: "CUTT URL button",
        url: "/",
      },
      {
        titleUrl: "Preview mode",
        url: "/",
      },
    ],
  },
  {
    title1: "Cuttly Tools",
    urlItem1: [
      {
        titleUrl: "Cuttly Platform",
        url: "/",
      },
      {
        titleUrl: "URL shortener tool",
        url: "/",
      },
      {
        titleUrl: "Link analytics tool",
        url: "/",
      },
      {
        titleUrl: "Cuttly Surveys",
        url: "/",
      },
      {
        titleUrl: "Link-in-bio",
        url: "/",
      },
      {
        titleUrl: "QR Codes",
        url: "/",
      },
      {
        titleUrl: "Unshorten URL",
        url: "/",
      },
      {
        titleUrl:
          "TRAI SMS Compliance with Cuttly: Custom Domains with Headers",
        url: "/",
      },
      {
        titleUrl:
          "TRAI SMS Compliance with Cuttly: generic shortener with 2s.ms Domain & Headers",
        url: "/",
      },
    ],
  },
  {
    title1: "Cuttly Resources",
    urlItem1: [
      {
        titleUrl: "Blog",
        url: "/",
      },
      {
        titleUrl: "Support",
        url: "/",
      },
      {
        titleUrl: "Integrations",
        url: "/",
      },
      {
        titleUrl: "Status",
        url: "/",
      },
    ],
    title2: "Legal & Policies",
    urlItem2: [
      {
        titleUrl: "Terms of service",
        url: "/",
      },
      {
        titleUrl: "Privacy Policy",
        url: "/",
      },
      {
        titleUrl: "GDPR",
        url: "/",
      },
      {
        titleUrl: "Cookies",
        url: "/",
      },
      {
        titleUrl: "Abuse report",
        url: "/",
      },
      {
        titleUrl: "Contact",
        url: "/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-left">
              <img className="footer-logo" src="/images/foot_logo.svg" alt="logo" />
              <div className="footer-text">
                URL Shortener, Branded Short Links & More | Cuttly
              </div>
              <div className="footer-society">
                <a href="http://">
                  <img src="/images/fb.svg" alt="" />
                </a>
                <a href="http://">
                  <img src="/images/twitter.svg" alt="" />
                </a>
                <a href="http://">
                  <img src="/images/instagram.svg" alt="" />
                </a>
                <a href="http://">
                  <img src="/images/linkedin.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="footer-right">
              {menuFooter.map((item, index) => {
                return (
                  <div className="item-menu" key={index}>
                    <div className="footer-menu">
                      <div className="title">{item?.title1}</div>
                      <ul>
                        {item?.urlItem1?.map((item, index) => (
                          <li key={index}>
                            <Link href={item?.url}>{item?.titleUrl}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item?.urlItem2 && (
                      <div className="footer-menu">
                        <div className="title">{item?.title2}</div>
                        <ul>
                          {item?.urlItem2?.map((item, index) => (
                            <li key={index}>
                              <Link href={item?.url}>{item?.titleUrl}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
