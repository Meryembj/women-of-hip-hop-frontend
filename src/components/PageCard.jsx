import { Link } from "react-router-dom";

function pageCard({ pageName, pageDescription, pageThumbnail, path }) {
  return (
    <Link to={path} className="pageCard">
      <img className="pageThumbnail" alt="page thumbnail" src={pageThumbnail} />
      <h3 className="pageCardTitle">{pageName}</h3>
      <p className="pageDescription">{pageDescription}</p>
    </Link>
  );
}

export default pageCard;
