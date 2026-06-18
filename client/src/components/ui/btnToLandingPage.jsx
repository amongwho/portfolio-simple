import { Link } from "react-router-dom";

export const BtnToLandingPage = () => {
  return (
    <>
      <Link
        to="/"
        style={{ position: "sticky", top: "20px", left: "40px", zIndex: 1000 }}
      >
        Back to Landing Page
      </Link>
    </>
  );
};
