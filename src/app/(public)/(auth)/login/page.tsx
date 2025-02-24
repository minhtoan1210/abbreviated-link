import Link from "next/link";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="title"> Log in </div>
          <LoginForm />
          <div className="login-other">
            <div className="title">Log in with</div>
            <div className="btn-other">
              <Link href="/" className="tbn-fb">
                Facebook
              </Link>
              <Link href="/" className="tbn-google">
                Google
              </Link>
              <Link href="/" className="tbn-twitter">
                Twitter
              </Link>
            </div>
            <div className="title-sub">You do not have an account?</div>
            <div className="btn-create">Create an account</div>
          </div>
        </div>
        <div className="login-rules">
          <div className="container">
            <div className="rules-title">Safe login rules</div>
            <div className="rules-text">
              Protect your data and always stay safe when logging in.
            </div>
            <div className="rules-item">
              <div className="item">
                <div className="item-title">Login data</div>
                <div className="item-text">
                  Keep your login details safe and don't share them with anyone.
                  Always use a strong password.
                </div>
              </div>
              <div className="item">
                <div className="item-title">Login page</div>
                <div className="item-text">
                  Always make sure you are on the correct login page before
                  entering your login and password. Double-check the website
                  address in your browser before entering your login details.
                </div>
              </div>
              <div className="item">
                <div className="item-title">Multi-factor authentication</div>
                <div className="item-text">
                  Use two-factor login methods. On our website, we offer 2FA
                  with a one-time password via e-mail or with the use of Google
                  Authenticator.
                </div>
              </div>
              <div className="item">
                <div className="item-title">
                  Watch out for suspicious emails and text messages
                </div>
                <div className="item-text">
                  Always check the sender of e-mails and text messages. Do not
                  click on links from unknown senders, especially when they ask
                  you for login details.
                </div>
              </div>
              <div className="item">
                <div className="item-title">
                  Do not install software from unknown sources
                </div>
                <div className="item-text">
                  Do not install software that comes from unknown sources.
                  Always use official sources.
                </div>
              </div>
              <div className="item">
                <div className="item-title">Anti-virus software</div>
                <div className="item-text">
                  Use up-to-date antivirus software on your devices and
                  computer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
