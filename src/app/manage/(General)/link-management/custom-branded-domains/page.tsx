import React from "react";
import "./style.css";
import Link from "next/link";
import CustomDomains from "./component/CustomDomains";
import ManageAPI from "./component/ManageAPI";
import ChangeEmailAddress from "./component/ChangeEmailAddress";
import ChangePassword from "./component/ChangePassword";
import Change from "./component/Change";
import GlobalStatistics from "./component/GlobalStatistics";
import Crawler from "./component/Crawler";

export default function page() {
  return (
    <div className="custom-branded-domains">
      <div className="account">Your account</div>
      <div className="box">
        <div>
          <div className="card-level">
            <img src="/images/startup.svg" alt="" className="starup" />
            <div className="card-text">
              <div className="title">Take it to the next level</div>
              <div className="description">
                Take advantage of more useful features. All this to manage your
                links in an intuitive and simple way. You don't have a
                subscription.
              </div>
            </div>
            <div className="btn-buy btn">
              <img src="/images/link_bg.svg" alt="" />
              <Link href="/">Buy subscription</Link>
            </div>
          </div>
          <div className="card-body">
            <div className="title">Here you can add your branded domain</div>
            <p>
              Adding your own custom branded domain that you will use to create
              short links requires you to make two changes to your domain's DNS
              record settings:
            </p>
            <p>1. Set DNS A record: 46.248.190.217</p>
            <p>
              2. Add DNS TXT record: After adding your domain, we will generate
              a unique token that you must put in the DNS settings in the TXT
              record. The token will be available after you add your domain and
              it will be displayed below in your domain section.
            </p>
            <CustomDomains />
            <div className="btn-add btn">
              <img src="/images/link_bg.svg" alt="" />
              <span>Add new domain</span>
            </div>
          </div>
        </div>
        <div className="profile-edit">
          <div className="profile-key">
            <div className="title">API key</div>
            <ManageAPI />
          </div>
          <div className="profile-email">
            <div className="title">nguyenvuminhtoan1999@gmail.com</div>
            <ChangeEmailAddress />
            <br />
            <Link href="/manage/account/login-log" className="login-registry btn-link-management">
              Login Registry
            </Link>
          </div>
          <div className="profile-password">
            <div className="title">Password</div>
            <ChangePassword />
            <br />
            <Link
              href="/manage/account/pass-registry"
              className="change-password-registry btn-link-management"
            >
              change password Registry
            </Link>
          </div>
          <div className="profile-security">
            <div className="title">
              Security (Two-Factor Authentication | 2FA)
            </div>
            <Link href="/manage/OTP-set" className="btn-link-management">
              manage 2FA | disabled
            </Link>
          </div>
          <div className="profile-links">
            <div className="title">Links per page | Pagination</div>
            <Change />
          </div>
          <div className="profile-other-settings">
            <div className="title">Other settings</div>
            <Link href="/manage/edit/globalQR" className="btn-link-management">
              QR Codes settings
            </Link>
            <br />
            <GlobalStatistics />
            <br />
            <Crawler />
          </div>
          <div className="profile-billing">
            <div className="title">Billing</div>
            <Link href="/manage/billing/invoices" className="btn-link-management">Invoices</Link>
            <br />
            <Link href="#" className="btn-link-management">Certificate of Residence - 2025</Link>
            <br />
            <Link href="#" className="btn-link-management">Certificate of Residence - 2024</Link>
            <br />
            <Link href="#" className="btn-link-management">Certificate of Residence - 2023</Link>
            <br />
            <Link href="/manage/account/registry" className="btn-link-management">Your subscription Registry</Link>
          </div>
          <div className="profile-delete">
            <div className="title">Delete your account</div>
            <Link href="/manage/account/delete" className="btn-link-management">Delete your account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
