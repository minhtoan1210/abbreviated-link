import { ChartNoAxesColumn, Link, Link2, MousePointer } from "lucide-react";

export default function CuttlyOverview() {
  return (
    <>
      <div className="overview">
        <div className="part-allUrl">
          <div className="title">All URLs</div>
          <div className="subtext">
            <div className="number">7</div>
            <Link />
          </div>
        </div>
        <div className="part-total">
          <div className="title">Total clicks</div>
          <div className="subtext">
            <div className="number">1</div>
            <MousePointer />
          </div>
        </div>
        <div className="part-links">
          <div className="title">Links added this month</div>
          <div className="subtext">
            <div className="number">7</div>
            <Link2 />
          </div>
        </div>
        <div className="part-increment">
          <div className="title">Link increment in Mar 2025</div>
          <div className="subtext">
            <div className="number">
              7 more than in Feb 2025
            </div>
            <ChartNoAxesColumn />
          </div>
        </div>
      </div>
    </>
  );
}
