function Footer() {
    const handleClick = () => {
    window.location.href = '/Shop'
}

  return (
    <div className="navbar  bg-transparent d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x">
      <button className="btn nav-link btn-sm" type="button" onClick={handleClick}>
        Shop
      </button>
    </div>
  );
}

export default Footer;
