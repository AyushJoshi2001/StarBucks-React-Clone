function H3(props) {
  return (
    <h3 className={"text-lg font-semibold " + props.className}>
       {props.children}
    </h3>
  );
}

export default H3;
