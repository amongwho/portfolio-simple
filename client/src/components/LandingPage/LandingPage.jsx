import styles from "./LandingPage.module.css";
import { Link, Routes, Route } from "react-router-dom";

import { Projects } from "../../pages/Projects.jsx";
import { Contact } from "../../pages/Contact.jsx";
import { Login } from "../../pages/Login.jsx";
import { Notes } from "../../pages/Notes.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";

export const LandingPage = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <section className={styles.sectionIntro}>
              <div className={styles.about}>
                <h1>ABOUT</h1>
                <p>
                  This Portfolio/Website Serve as my playground and
                  boilerplates, same as for the projects, that I can control
                  what I can do,what I need to add and improve, and making
                  projects that not ONLY for knowing and showing I can build that,
                  but also making sure it benefits my daily life. As for this
                  Portfolio I will show and improve my capabilities on how to
                  think, and improve any problem that may occur. On any you see
                  bugs or errors will be use for learning, as time to time use
                  to show as evidence for my process. The main goal is not to be
                  perfect, but to create a digital resume on showing my
                  capabilities and problem solving skills as a proof of
                  work.{" "}
                </p>
                <p>
                  I am really interested more on logics and system design(not
                  UI), so any UI here in this portfolio may not be perfect yet,
                  and when that layout/logic will be done the rest like
                  typography and elements with its stylesheets will be next.
                  Obviously the work here is under construction, and not that{" "}
                  <em>expert level</em> yet.
                </p>
              </div>
              <div className={styles.builtOn}>
                <h1>BUILT ON:</h1>
                <ul>
                  <li>
                    MERN W/ JTOKEN, CORS, DOTENV, BCRYPT, VITE
                    <ul>
                      <li>LANDING PAGE AND LINKS - REACT</li>
                      <li>LOGIN and CRUD PAGE - REACT, NOSQL(MONGODB) </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.frameworks}>
                <h1>FRAMEWORKS</h1>
                <ul>
                  <li>MERN</li>
                </ul>
              </div>
              <nav className={styles.nav}>
                <Link to="/" className={styles.links}>
                  <img src="" alt="LOGO" />
                </Link>{" "}
                <Link to="/projects" className={styles.links}>
                  PROJECTS
                </Link>{" "}
                <Link to="/contact" className={styles.links}>
                  CONTACT/CV
                </Link>{" "}
                <Link to="/login" className={styles.links}>
                  LOGIN
                </Link>
              </nav>

              <div className={styles.tools}>
                <h1>TOOLS</h1>
                <ul>
                  <li>
                    VS CODE
                    <ul>
                      <li>Prettier</li>
                      <li>EsLint</li>
                      <li>GitLens</li>
                    </ul>
                  </li>
                  <li>GitHub</li>
                  <li>Git & Git Bash</li>
                  <li>
                    Projects Tab will consist of images of interfaces and short
                    description of features
                  </li>
                </ul>
              </div>
            </section>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
