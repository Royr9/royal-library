import { ReactNode } from "react";
import "./footer.css";

const year = new Date().getFullYear();

type FooterPropsType = {
  children: string
}

export default function Footer({children} : FooterPropsType) {
  return (
    <footer>
      <p className="footer-text"> © {year} {children}</p>
    </footer>
  );
}
