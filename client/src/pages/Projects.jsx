import { BtnToLandingPage } from "../components/ui/btnToLandingPage.jsx";
import {
  ProjectShowcaseLeft,
  ProjectShowcaseRight,
} from "../components/ProjectShowcase.jsx";
import styles from "./Projects.module.css";
import budgetingImage from "../assets/budgeting_web.png";
import inventoryImage from "../assets/inventory_web.png";

export const Projects = () => {
  return (
    <>
      <BtnToLandingPage />
      <h1>Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectShowcaseLeft
          imageUrl={budgetingImage}
          imageAlt="Budget Methods"
          eyebrow="REACT (VITE)"
          title="Four Budgeting Methods Calculator"
          description=" A beautifully simple web app that gives individuals and small businesses instant visibility into their spending, savings, and financial goals all in one place."
          features={[
            "Income and expense tracking",
            "Simple UI for faster navigation",
            "Easy to calculate which budgeting method",
            "Lightweight and fast",
          ]}
        />

        <ProjectShowcaseRight
          imageUrl={inventoryImage}
          imageAlt="Inventory System"
          eyebrow="MongoDB - Express - React (Vite) - Node.Js"
          title="Inventory System"
          description=" Flexible inventory system where you can create and rename locations, nest sub-locations within them, and easily add or edit items at every levelin one organized interface.."
          features={[
            "Easy to add Locations, sub-locations and items",
            "Fast and easy to edit,delete and add.",
            "Simple UI",
          ]}
        />
      </div>
    </>
  );
};
