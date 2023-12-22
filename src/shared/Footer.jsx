import { SiTask } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-blue-600 text-white">
        <aside>
        <SiTask className="text-5xl" />
          <p>
           Task Management
            <br />
            All rights are reserved by @Priyanka Das
          </p>
        </aside>
        <nav>
         
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Task Management</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <a href="https://www.facebook.com/" className="link link-hover">Facebook</a>
          <a href="https://www.youtube.com/" className="link link-hover">YouTube</a>
          <a href="https://www.github.com/" className="link link-hover">GitHub</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
