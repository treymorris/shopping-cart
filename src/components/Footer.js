import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/Shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-transparent d-flex justify-content-center ">
      <button
        className="btn nav-link btn-sm"
        type="button"
        onClick={handleClick}
      >
        Shop
      </button>
    </div>
  );
}

export default Footer;
