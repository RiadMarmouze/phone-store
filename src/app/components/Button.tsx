const Button = ({
    label,
    backgroundColor = "bg-transparent",
    textColor = "text-color3",
    fontSize = "text-lg",
    borderColor = "border-color3",
    fullWidth = "w-fit",
  }:{
    label?:string,
    backgroundColor?:string,
    textColor?:string,
    fontSize?:string,
    borderColor?:string,
    fullWidth?:string,
  }) => {
    return (
      <button
        className={`flex justify-center items-center 
                    ${fullWidth} px-6 py-3 rounded-full 
                    ${backgroundColor} border ${borderColor} 
                    font-montserrat font-bold ${fontSize} leading-none ${textColor} `}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  