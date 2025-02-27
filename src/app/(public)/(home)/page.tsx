import Link from "next/link";
import CreateLink from "./component/createLink";
import HeaderHome from "./component/headerHome";
import "./component/style.css";
import { Switch } from "@/components/ui/switch";
import {
  ChartNoAxesColumn,
  CircleCheck,
  Clock,
  Code,
  Copy,
  Facebook,
  Fingerprint,
  FolderKanban,
  KeyRound,
  Mouse,
  MoveDown,
  Plus,
  QrCode,
  Settings,
  TabletSmartphone,
  TestTubeDiagonal,
  Trash2,
  Twitter,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <CreateLink />
      <div className="cuttly">
        <div className="container">
          <div className="cuttly-title">
            <span>What is</span> Cuttly?
          </div>
          <div className="cuttly-description">
            Cuttly is your go-to platform for shortening and managing links. As
            a powerful URL shortener, it also provides in-depth link analytics
            to help you grow your business. With Cuttly, you can manage all your
            links, create Link in bio microsites, generate QR Codes, and run
            surveys, effortlessly bridging the gap between offline and online
            solutions. Cuttly is your go-to platform for shortening and managing
            links. As a powerful URL shortener, it also provides in-depth link
            analytics to help you grow your business. With Cuttly, you can
            manage all your links, create Link in bio microsites, generate QR
            Codes, and run surveys, effortlessly bridging the gap between
            offline and online solutions.
          </div>
          <div className="box">
            <div className="item-box" id="box1">
              <div className="item-title">
                <img src="./m_ico_m_c_1.svg" alt="" />
                <span>URL Shortener</span>
              </div>
              <div className="item-description">
                Easily create custom and branded short links with Cuttly.
                Optimize your URLs to stand out and increase engagement for your
                brand.
              </div>
              <div className="item-phone">
                <div className="phone phone_start">
                  <div className="phone-big">
                    <div className="phone-screen">
                      <div className="circle_ph"></div>
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
              </div>
            </div>
            <div className="item-box" id="box2">
              <div className="item-title">
                <img src="./m_ico_m_c_2.svg" alt="" />
                <span>Link analytics</span>
              </div>
              <div className="item-description">
                <p>
                  Track and measure your links' performance in real time. Use
                  Cuttly's advanced analytics to understand how your audience
                  interacts with your links.
                </p>
                <span className="item-description-animation"></span>
              </div>
            </div>
            <div className="item-box" id="box3">
              <div className="item-title">
                <img src="./m_ico_m_c_5.svg" alt="" />
                <span>Surveys</span>
              </div>
              <div className="item-description">
                <p>
                  Track and measure your links' performance in real time. Use
                  Cuttly's advanced analytics to understand how your audience
                  interacts with your links.
                </p>
                <span className="hr_nth_1">
                  <i></i>
                </span>
                <span className="hr_nth_2">
                  <i></i>
                </span>
              </div>
            </div>
            <div className="item-box" id="box4">
              <div className="item-title">
                <img src="./m_ico_m_c_4.svg" alt="" />
                <span>QR Codes</span>
              </div>
              <div className="item-description">
                <p>
                  Track and measure your links' performance in real time. Use
                  Cuttly's advanced analytics to understand how your audience
                  interacts with your links.
                </p>
                <span className="hr_nth_1"></span>
                <span className="hr_nth_2"></span>
                <span className="hr_nth_3"></span>
                <span className="hr_nth_4"></span>
                <span className="hr_nth_5"></span>
              </div>
            </div>
            <div className="item-box" id="box5">
              <div className="item-title">
                <img src="./m_ico_m_c_3.svg" alt="" />
                <span>Link in bio</span>
              </div>
              <div className="item-description">
                <p>
                  Track and measure your links' performance in real time. Use
                  Cuttly's advanced analytics to understand how your audience
                  interacts with your links.
                </p>
                <span className="hr_nth_1"></span>
                <span className="hr_nth_2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="discover">
          <div className="text-custom-url">
            Custom URL Shortener, Branded link shortening
          </div>
          <div className="text-title">
            Discover <span>the possibilities</span> of managing{" "}
            <span>short links</span>
            <span>.</span>
          </div>
          <div className="text-description">
            Cuttly is a comprehensive Link Management Platform and URL shortener
            that helps you take full control over your links. Easily create
            short links and manage your campaigns with features like custom URL
            slugs, UTM codes for tracking, A/B testing, and mobile redirects.
            Plus, enjoy advanced options like password-protected links and deep
            links — and much more.
          </div>
          <div className="discover-url">
            <div className="discover-url-date">
              <Switch className="btn-switch" />
              <div className="text-date">2025-02-26</div>
            </div>
            <div className="discover-url-title">
              <img src="./favicon-32x32.png" alt="" />
              <span>
                Cuttly | URL Shortener, Branded URLs, Link Management, API{" "}
              </span>
            </div>
            <Link href="/" className="discover-url-link">
              https://cutt.ly/resources/support/short-link-features/{" "}
            </Link>
            <div className="discover-url-linkrandedshort">
              Cuttly short link:{" "}
              <Link href="/">cutt.ly/URL-Shortener-Features</Link>
            </div>
            <div className="discover-url-linkbrandedshort">
              Branded short link:{" "}
              <Link href="/">yourbrnd.link/URL-Shortener-Features</Link>
            </div>
            <div className="discover-url-addtag">
              <div className="btn-icon">
                <Copy />
                <Fingerprint />
                <Code />
                <KeyRound />
                <TabletSmartphone />
                <Mouse />
                <FolderKanban />
                <Clock />
                <Settings />
                <TestTubeDiagonal />
                <QrCode />
                <Trash2 />
                <Facebook />
                <Twitter />
              </div>
              <div className="btn-addtag">
                <span>#add tag</span>
                <div className="clicks">
                  <ChartNoAxesColumn />
                  <span>259</span>
                  <span>clicks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="discover-options">
            <p>
              By checking short links in your dashboard, you can perform
              additional actions for them, such as: creating a link in bio from
              selected short links, hiding links, adding them to your favourites
              list or merging links into one bulk link.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="linkanalytics">
          <div className="alytics">
            <div className="left">
              <span className="text-link">Link analytics</span>
              <div className="text-title">
                Track the performance and click-through rate of short links.
              </div>
              <div className="text-description">
                Effective link optimization requires robust link analytics.
                Cuttly provides comprehensive statistics and insights into short
                link clicks to drive your growth.
              </div>
              <div className="text-see">
                See it in action <MoveDown />
              </div>
              <div className="btn-seelink">
                <img src="./link_bg.svg" alt="" />
                <span>See link analytics page</span>
              </div>
            </div>
            <div className="right">
              <img src="./img_lm_2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cuttly-surveys">
          <div className="left">
            <div className="star1">
              <img src="./star_1_a.svg" alt="" />
              <img src="./star_1_a.svg" alt="" />
              <img src="./star_1_a.svg" alt="" />
              <img src="./star_1_a.svg" alt="" />
              <img src="./star_1_a.svg" alt="" />
            </div>

            <div className="star2">
              <img src="./star_2_a.svg" alt="" />
              <img src="./star_2_a.svg" alt="" />
              <img src="./star_2_a.svg" alt="" />
              <img src="./star_2_a.svg" alt="" />
              <img src="./star_2_a.svg" alt="" />
            </div>

            <div className="star3">
              <img src="./star_3_a.svg" alt="" />
              <img src="./star_3_a.svg" alt="" />
              <img src="./star_3_a.svg" alt="" />
              <img src="./star_3_a.svg" alt="" />
              <img src="./star_3_a.svg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="text-cuttlysurveys">Cuttly Surveys</div>
            <div className="text-title">
              Harness audience insights with Cuttly Surveys.
            </div>
            <div className="text-description">
              Create engaging surveys to gather valuable feedback from your
              audience. From ratings and multiple-choice to open-ended
              questions, Cuttly Surveys makes it easy to collect insights and
              refine your marketing strategies. Track responses, analyze data,
              and improve customer communication with ease.
            </div>
            <div className="text-see">
              See it in action <MoveDown />
            </div>
            <div className="btn-seelink">
              <img src="./link_bg.svg" alt="" />
              <span>See link analytics page</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inbio">
          <div className="left">
            <div className="text-inbio">Link in bio pages</div>
            <div className="text-title">
              Create stunning and modern Link in bio pages.
            </div>
            <div className="text-description">
              Showcase what's important with fully customizable microsites.
              Share your link in bio on social platforms using short links or
              dedicated QR codes, and track clicks effortlessly.
            </div>
            <div className="btn-see">
              <img src="./link_bg.svg" alt="" />
              <span>See our Link in bio</span>
            </div>
            <div className="list_tick">
              <CircleCheck />
              <div>
                <div className="tick-title">
                  Your own link in bio in no time
                </div>
                <div className="tick-description">
                  Create personalized pages with links, profile pictures,
                  titles, and descriptions.
                </div>
              </div>
            </div>
            <div className="list_tick">
              <CircleCheck />
              <div>
                <div className="tick-title">
                  Your own link in bio in no time
                </div>
                <div className="tick-description">
                  Create personalized pages with links, profile pictures,
                  titles, and descriptions.
                </div>
              </div>
            </div>
            <div className="list_tick">
              <CircleCheck />
              <div>
                <div className="tick-title">
                  Your own link in bio in no time
                </div>
                <div className="tick-description">
                  Create personalized pages with links, profile pictures,
                  titles, and descriptions.
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="phone">
              <div className="phone-big">
                <div className="phone-screen">
                  <img src="./link-in-bio_cuttly.jpg" alt="" />
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
          </div>
        </div>
      </div>
      <div className="container">
        <div className="qrcodegenerato">
          <div className="left">
            <div className="text-qrcodegenerato">QR code generator</div>
            <div className="text-title">
              Create stylish and <span>branded QR codes</span> to grow your
              business.
            </div>
            <div className="text-description">
              Generate and customize QR codes for short links, link in bio
              pages, and surveys to match your brand's style. Easily edit QR
              codes by tweaking shapes, colors, and adding your logo. Increase
              engagement and track clicks with ease.
            </div>
            <img src="./img_qr_1.png" alt="" />
          </div>
          <div className="right">
            <div>
              See it in action <MoveDown />
            </div>
            <img src="./cuttbioURL-Shortener.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sms">
          <div className="left">
            <div className="text-sms">
              URL Shortener with custom header for TRAI SMS
            </div>
            <div className="text-title">
              TRAI-Compliant Link Shortening Solutions.
            </div>
            <div className="text-description">
              Cuttly offers a URL shortener with custom headers, enabling
              businesses to create SMS-compliant short links that meet India’s
              TRAI regulations. Use 2s.ms domain or custom domains with HEADERS
              to generate links suitable for SMS marketing campaigns, ensuring
              they fit within required message formats.
            </div>
            <div className="sms-link">
              <CircleCheck />
              <span>https://2s.ms/HEADER/dynamicShortLinkID</span>
            </div>
            <div className="sms-link">
              <CircleCheck />
              <span>https://2s.ms/HEADER/dynamicShortLinkID</span>
            </div>
            <Link href="/" className="text-see">
              <img src="./link_bg.svg" alt="" />
              <span>Custom Domains & Headers</span>
            </Link>
            <Link href="/" className="text-see">
              <img src="./link_bg.svg" alt="" />
              <span>Custom Domains & Headers</span>
            </Link>
          </div>
          <div className="right">
            <img src="./img_tcus_02.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mastering">
          <div className="mastering-title">
            Mastering <span>URL Shortening</span> and
            <span> Digital Strategies</span>
          </div>
          <div className="card">
            {[0, 1, 3].map((item, key) => (
              <div className="item" key={key}>
                <img src="./top10-shorteners.png" alt="" />
                <div className="card-title">
                  Top 10 Best URL Shorteners in 2025
                </div>
                <div className="card-description">
                  In the fast-paced digital world, URL shorteners are essential
                  tools for streamlining links, enhancing brand visibility, and
                  analyzing online campaigns. This article presents an updated
                </div>
                <Link href="/" className="item-btn-link">
                  <img src="./link_bg.svg" alt="" />
                  <span>Explore Top 10 URL Shorteners</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pricing">
        <div className="container">
          <div className="pricing-title">
            <span>Pricing</span> for individuals, businesses, and companies of
            all sizes.
          </div>
          <div className="pricing-customized">
            Engage your target audience with customized short links, QR Codes,
            surveys and link in bio that capture their attention, while
            benefiting from advanced click statistics.
          </div>
          <div className="pricing-paymonthly">
            <span>Pay monthly</span>
            <Switch className="pricing-switch" />
            <span>Pay yearly - save one month</span>
          </div>
          <div className="pricing-money">
            {[1, 2, 3, 6, 5].map(() => (
              <div className="item">
                <div className="item-header">
                  <div className="item-title">Free</div>
                  <div className="item-money">
                    $12 <span>/ monthly</span>
                  </div>
                </div>
                <div className="item-subtitle">Extended plan for beginners</div>
                <div className="detail">
                  <span className="title">Short links</span>{" "}
                  <span className="title">30/month</span>
                </div>
                {[...Array(10)].map(() => (
                  <div className="detail">
                    <span>Link clicks</span> <span>Unlimited</span>
                  </div>
                ))}
                <Link href="/">
                  <img src="./link_bg.svg" alt="" />
                  <span>Sign up</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="btn-link-cuttly">
            <Link href="/">
              <img src="./link_bg.svg" alt="" />
              <span>Cuttly Features</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="faq">
          <div className="title-faq">FAQ</div>
          <div className="subtitle">Frequently Asked Questions</div>
          {[...Array(4)].map((item, key) => (
            <div className="accordion" key={key}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex justify-between hover:no-underline">
                    What is a URL shortener and how does it work?
                    <Plus className="w-8 h-8 transition-transform data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent>
                    A URL shortener creates a compact version of a long URL,
                    often referred to as a tiny URL, making it short and easier
                    to share. Cuttly offers an advanced link shortener that not
                    only simplifies your links but also tracks analytics,
                    allowing you to see how your short links perform.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        <div className="comprehensive">
          <div className="left">
            <div className="comprehensive-title">
              Comprehensive <span>URL Shortener</span> and Link Management.
            </div>
            <div className="comprehensive-description">
              Cuttly simplifies link management by offering a user-friendly URL
              shortener that includes branded short links. Boost your brand’s
              growth with short, memorable, and engaging links, while seamlessly
              managing and tracking your links using Cuttly's versatile
              platform. Generate branded short links, create customizable QR
              codes, build link-in-bio pages, and run interactive surveys—all in
              one place.
            </div>
          </div>
          <div className="right">
            <div className="btn-link">
              <Link href="/">
                <img src="./link_bg.svg" alt="" />
                <span>Sign up</span>
              </Link>
              <Link href="/">
                <img src="./link_bg.svg" alt="" />
                <span>Pricing</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="consistently">
          <div className="consistently-title">
            Cuttly - Consistently Rated Among Top <span>URL Shorteners.</span>
          </div>
          <div className="consistently-description">
            Cuttly isn’t just another URL shortener. Our platform is trusted and
            recognized by top industry players like G2 and SaaSworthy. We're
            proud to be consistently rated as a High Performer in URL Shortening
            and Link Management, ensuring that our users get reliable,
            innovative, and high-performing tools.
          </div>
          <div className="consistently-listimg">
            {
              [...Array(6)].map((item,key) => (
                <img src="./G2_medal_HP_Winter_2024.svg" alt="" key={key}/>
              ))
            }
          </div>
          <div className="consistently-listimg2">
            {
              [...Array(3)].map((item,key) => (
                <img src="./SaaSworthy_Most_Worthy_Url_Shorteners_Top_3_Q3_2021.webp" alt="" key={key}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
