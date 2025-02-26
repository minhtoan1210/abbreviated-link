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
  QrCode,
  Settings,
  TabletSmartphone,
  TestTubeDiagonal,
  Trash2,
  Twitter,
} from "lucide-react";

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
      <div className="linkanalytics">
        <div className="container">
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
      <div className="inbio">
        <div className="container">
          <div className="text-inbio">Link in bio pages</div>
          <div className="text-title">
            Create stunning and modern Link in bio pages.
          </div>
          <div className="text-description">
            Showcase what's important with fully customizable microsites. Share
            your link in bio on social platforms using short links or dedicated
            QR codes, and track clicks effortlessly.
          </div>
          <div className="btn-see">
            <img src="./link_bg.svg" alt="" />
            <span>See our Link in bio</span>
          </div>
          <div className="list_tick">
            <CircleCheck />
            <div>
              <div className="tick-title">Your own link in bio in no time</div>
              <div className="tick-description">
              Create personalized pages with links, profile pictures, titles, and descriptions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
