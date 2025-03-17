import Link from "next/link";
import "./headerHome.css";
import ApexChart2 from "./apexChart2";
import ApexChart1 from "./apexChart1";
import VerticalSlider from "./slider";

export default function HeaderHome() {
  return (
    <div className="header bg-header">
      <div className="container header-home">
        <div className="header-left">
          <div className="text-url">URL Shortener</div>
          <div className="text-title">Get full control over short links</div>
          <div className="text-description">
            Easily shorten and manage your URLs with Cuttly. Create branded
            short links, generate customizable QR codes, build link in bio
            pages, and run interactive surveys.
          </div>
          <div className="btn-header">
            <Link href="/" className="btn-signup">
              <img src="/images/link_bg.svg" alt="" /> <span>Sign up</span>
            </Link>
            <Link href="/" className="btn-pricing">
              <img src="/images/link_bg.svg" alt="" /> <span>Pricing</span>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="header-phone">
            <div className="phone-big">
              <div className="phone-screen">
                <ApexChart1 />
                <ApexChart2 />
              </div>
              <div className="phone-details-top">
                <hr />
                <hr />
              </div>
              <div className="phone-details-side-l">
                <hr />
                <hr />
              </div>
              <div className="phone-details-side-r">
                <hr />
              </div>
            </div>
          </div>
          <VerticalSlider />
        </div>
      </div>
      <div className="bg-header"></div>
    </div>
  );
}
