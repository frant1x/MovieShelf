import { Link } from "react-router-dom";

const SectionHeader = ({ title, link }) => {
  const linkClasses =
    link?.variant === "button"
      ? "btn btn-success py-0 px-2" // Стиль кнопки
      : "small text-secondary text-decoration-none";

  return (
    <div className="d-flex justify-content-between align-items-end mb-3 border-bottom border-secondary pb-2">
      <h6 className="text-uppercase fw-bold mb-0">{title}</h6>
      {link && (
        <Link to={link.to} className={linkClasses}>
          {link.variant === "button" && <span className="me-1">+</span>}
          {link.text}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
