function Footer() {
  const handleClick = () => {
    window.location.href = "/Shop";
  };

  return (
    <div className="navbar bg-transparent d-flex justify-content-center ">
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
