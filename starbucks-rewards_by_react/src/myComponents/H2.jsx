function H2(props) {
  return (
    <h2 className={"text-2xl sm:text-3xl font-semibold "+ props.className}>
       {props.children}
    </h2>
  );
}

export default H2;
