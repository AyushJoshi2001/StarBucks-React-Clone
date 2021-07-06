function Button(props) {
  return (
    <button
      className={
        "flex items-center flex-shrink-0 px-4 py-1 my-2 font-semibold rounded-full text-md " +
        props.className
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
