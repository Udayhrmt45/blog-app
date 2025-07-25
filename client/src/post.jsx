import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "./lib/constant.js";

export default function Post({
  _id,
  title,
  summary,
  content,
  cover,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`${API_BASE_URL}/` + cover} alt="" />
        </Link>
      </div>
      <div className="text">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time datetime="">{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
