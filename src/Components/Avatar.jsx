const Avatar = (props) => {
  style = {
    borderRadius: "50%"
  };
  return (
    <>
      <h2>{props.caption}</h2>
      <img style={style} src={props.image} alt={props.caption} />
    </>
  );
};

export default Avatar;
