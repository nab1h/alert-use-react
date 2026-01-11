import { X } from "lucide-react";
import "../../index.css";
import "./index.scss";
import type { ReactNode } from "react";
interface Iprops {
  type: string;
  title: string;
  icon: ReactNode;
  description: string;
}
const Alert = ({ title, type = "alert-dangor", icon, description }: Iprops) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          <span>{icon}</span>
          <h3>{title}</h3>
        </div>
        <X className="close" size={35} />
      </div>
      <p>{description}</p>
    </div>
  );
};
export default Alert;
