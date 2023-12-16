import "./glowing_fill_button.scss";

type ButtonPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
  href?: string;
  download? :string;
  colorClass?: string;
  rel?: string;
  target?: string;

};


export default function GlowingFillButton({Element, children,href,download,colorClass,rel,target}: ButtonPropsType) {

  return (
    <Element target={target} rel={rel} href={href} download={download}  className={`glow-btn ${colorClass}`}>
        {children}
    </Element>
  )
}
