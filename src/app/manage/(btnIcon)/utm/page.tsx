import React from "react";
import "./style.css";
import { Button, Input } from "antd";

export default function pageUtm() {
  return (
    <div className="page-utm">
      <div className="title">UTM code generator</div>
      <div className="link">URL: https://cutt.ly/12321321321421421</div>
      <div className="regex">Allowed characters: A-Z a-z 0-9 _ + - {} .</div>
      <div className="utm_source">
        <div className="title">
          *Campaign Source (required) | <span>utm_source parameter</span>
        </div>
        <Input placeholder="e.g.: google, facebook, newsletter..." />
      </div>
      <div className="utm_medium">
        <div className="title">Campaign Medium | <span>utm_medium parameter</span></div>
        <Input placeholder="e.g.: banner, email, sms, cpc..." />
      </div>
      <div className="utm_campaign">
        <div className="title">Campaign Name | <span>utm_campaign parameter</span></div>
        <Input placeholder="e.g.: name, slogan, product..." />
      </div>
      <div className="utm_term">
        <div className="title">Campaign Term | <span>utm_term parameter</span></div>
        <Input placeholder="keywords (paid search) e.g.: running+equipment" />
      </div>
      <div className="utm_content"> 
        <div className="title">
        Campaign Content | <span>utm_content parameter</span>
        </div>
        <Input placeholder="e.g.: textlink, logolink..." />
      </div>
      <Button type="primary">Save</Button>
    </div>
  );
}
