import CuttlyOverview from "./component/overview";
import Checkboxes from "./component/checkboxes";
import "./style.css";

export default function dashboard() {
  return (
    <div className="dashboard">
      <CuttlyOverview />
      <Checkboxes />
    </div>
  );
}
