

type HeadingPropsType = {
  Element: keyof JSX.IntrinsicElements;
  children: string;
  className?: string | null;
  delay?: string;
  
};

export default function HeadingAnimated({
  Element,
  children,
  className,
  delay
}: HeadingPropsType) {


  return (
    <div
      className={`anm-typing-container  ${className}`}
    >
      <Element className={`anm-typing ${delay}`}>{children}</Element>
    </div>
  );
}
