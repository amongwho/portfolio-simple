import { useState } from "react";
import { BtnToLandingPage } from "../components/ui/btnToLandingPage.jsx";
import {
  ProjectShowcaseLeft,
  ProjectShowcaseRight,
} from "../components/ProjectShowcase.jsx";
import styles from "./Projects.module.css";
import budgetingImage from "../assets/budgeting_web.png";
import inventoryImage from "../assets/inventory_web.png";
import Modal from "../components/Changelog.jsx";

export const Projects = () => {
  const [openBudget, setOpenBudget] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);

  return (
    <>
      <BtnToLandingPage />
      <h1>Projects</h1>
      <div className={styles.projectContainer}>
        <div className={styles.projectBlock}>
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
          <div className={styles.projectButtonWrapper}>
            <button onClick={() => setOpenBudget(true)}>Budget Method Changelog</button>
            <Modal isOpen={openBudget} onClose={() => setOpenBudget(false)}>
              <h2>Some Title</h2>
              <p>Any content goes here — paragraphs, images, forms, whatever.</p>
            </Modal>
          </div>
        </div>

        <div className={styles.projectBlock}>
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
          <div className={styles.projectButtonWrapper}>
            <button onClick={() => setOpenInventory(true)}>Inventory System Changelog</button>
            <Modal isOpen={openInventory} onClose={() => setOpenInventory(false)}>
              <h2>Some Title</h2>
              <p>Any content goes here — paragraphs, images, forms, whatever.</p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
