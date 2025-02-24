const Button = ({ children, onClick, type = "primary" }) => {
  const styles = {
    primary: { backgroundColor: "blue", color: "white", padding: "10px" },
    secondary: { backgroundColor: "gray", color: "black", padding: "10px" },
  };

  return (
    <button style={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
