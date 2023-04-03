import { useEffect } from "react";

const Styling = ({isOnStyling}) => {
  useEffect(() => {
    document.body.style.backgroundImage = isOnStyling 
    ? "url('https://i.ibb.co/PNPyWTt/Untitled-design.jpg')" 
    : "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [isOnStyling,]);

  return (
        <div className="Cover" hidden={isOnStyling}>
            <span>
                <h2>CASIO</h2>
                <p>Made in India</p>
            </span>
            
        </div>
  )
};

export default Styling;
