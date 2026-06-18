import { BtnToLandingPage } from "../components/ui/btnToLandingPage.jsx";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <>
      <BtnToLandingPage />
      <main className={styles.contactPage}>
        <header className={styles.header}>
          <h1>Juneginel M. Cordova</h1>
          <h6 className={styles.subheading}>**As of 5/24/2026**</h6>
          {/* <p>address here</p> */}
          {/* <p>phone then email here</p> */}
        </header>

        <section className={styles.section}>
          <h2>Experience</h2>
          <h3>College Works</h3>
          <ul>
            <li>
              Developed a Windows registration application using C# and built a
              calculator and number randomizer app in Java, with prototypes for
              both desktop and web interfaces.
            </li>
            <li>
              Built CRUD web applications using HTML, CSS, JavaScript, PHP, and
              SQL with local development environments such as WAMP and XAMPP.
            </li>
            <li>
              Applied computer networking knowledge, client-server relationships,
              and network topology concepts.
            </li>
            <li>
              Performed Windows OS installations and assembled/disassembled
              system units.
            </li>
          </ul>
          <h3>OJT / Internship (OWWA)</h3>
          <p>600 hours</p>
          <ul>
            <li>Designed graphics and edited photos/videos for events and celebrations.</li>
            <li>Updated and maintained database content with accuracy and integrity.</li>
            <li>Assisted clients via walk-in, phone, and email for service and technical support.</li>
            <li>Collaborated effectively with coworkers in a professional environment.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Personal Projects</h2>
          <p>
            Web applications built for practical use, flexibility, and future upgrades.
          </p>
          <ul>
            <li>
              <strong>Fullstack MERN Landing Page</strong> - landing page with user
              authentication and a project showcase interface.
            </li>
            <li>
              <strong>Budgeting Calculators</strong> - four budgeting tools built with
              React and Vite for personal finance management.
            </li>
            <li>
              <strong>Fullstack MERN Inventory System</strong> - CRUD application for
              managing locations, sub-locations, and item details.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Thesis</h2>
          <p>
            Bachelor of Science in Computer Science — Saint Vincent’s College Incorporated
          </p>
          <p>
            <em>
              “Comparison of Priority Scheduling and First-Come, First-Served Algorithm: Basis for SVCI’s Queue Management System”
            </em>
          </p>
          <p>
            A study comparing scheduling algorithms to recommend the best option for a school queue management system.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Certifications & Skills</h2>
          <ul>
            <li>Civil Service Commission (CSC) Professional Examination Passer – August 10, 2025</li>
          </ul>
          <h3>Technical Skills</h3>
          <ul>
            <li>Android Studio, VS Code, Figma, Adobe XD, Git, GitHub</li>
            <li>JavaScript, Java, Python, C#, C, CSS, HTML, PHP</li>
            <li>Microsoft Word, Excel, PowerPoint</li>
            <li>Photo and video editing software</li>
            <li>Networking and system analysis</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <ul>
            <li>BSCS - Bachelor of Science in Computer Science, Saint Vincent’s College Incorporated</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Events Attended</h2>
          <ul>
            <li>World of Works and Labor Education for Graduating Students (WOW-LEGS)</li>
            <li>Pre-Employment Seminar for Local Applicants (PESLA)</li>
            <li>Seminar on Human Trafficking and Child Exploitation</li>
            <li>Symposium on “Laudato Si”</li>
            <li>STEM Student Grade 7 to 12 - Polanco National High School</li>
            <li>Elementary at Polanco Central School</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Abilities & Attributes</h2>
          <ul>
            <li>Strong problem-solving ability</li>
            <li>Organized documentation practices</li>
            <li>Technical troubleshooting skills</li>
            <li>Quick learner with strong adaptability</li>
            <li>Team player with a collaborative mindset</li>
            <li>Committed to continuous improvement</li>
            <li>Resourceful and tool-oriented</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Hobbies & Interests</h2>
          <ul>
            <li>System design, performance, and maintenance topics</li>
            <li>Computer studies and AI trends</li>
            <li>Basketball, strategy games, board games, and motorsports</li>
          </ul>
        </section>
      </main>
    </>
  );
};
