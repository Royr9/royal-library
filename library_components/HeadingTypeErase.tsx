import { useEffect, useState } from "react";


type HeadingPropsType = {
 Element: keyof JSX.IntrinsicElements;
 firstText: string;
 secondText: string;
 extraClasses?: string | null;
  delay?: string;
 
};

export default function HeadingTypeErase({
  Element,
  extraClasses,
  delay,
  firstText,
  secondText
}: HeadingPropsType) {

    const [currentAnimation, setCurrentAnimation] = useState<"anm-typing" | "anm-erase">("anm-typing");
    const [currentText, setCurrentText] = useState<string>(firstText);

    useEffect(()=>{
       const timeout = setTimeout(()=>{
            setCurrentAnimation("anm-erase")
            setTimeout(()=>{
                setCurrentText((prevValue)=>
                     prevValue === firstText ? secondText : firstText
                );
                setCurrentAnimation("anm-typing");
            }, 2000)
            
        }, 4500);

        return ()=> clearTimeout(timeout);
    }, [currentText])

  return (
    <div
      className={`anm-typing-container  ${extraClasses}`}>
      <Element className={`${currentAnimation} animate--slower`}>
        {currentText}
      </Element>
    </div>
  );
}
