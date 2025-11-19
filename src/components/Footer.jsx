import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-min">
      <p>
        © {new Date().getFullYear()} Syed Anas • All Rights Reserved.
      </p>
    </footer>
  );
}
