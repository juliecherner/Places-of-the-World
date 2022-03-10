import StarIcon from "@mui/icons-material/Star";
import "./comments-list.css";

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      {comments.length > 0 ? (
        <div>
          <CommentPost comments={comments} />
        </div>
      ) : (
        <div>No comments</div>
      )}
    </div>
  );
};

export default CommentsList;

const CommentPost = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment._id} className="comment">
            <div>
              {comment.user} wrote / {comment.updated.substring(0, 10)}
            </div>
            <div>{comment.text}</div>
            <div>
              Rate: {comment.rate}
              <CommentStar number={comment.rate} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentStar = ({ number }) => {
  const arrayOfNumbers = [];
  for (let i = 0; i < number; i++) {
    arrayOfNumbers.push(i);
  }
  return (
    <div>
      {arrayOfNumbers.map((i) => (
        <StarIcon key={i + number} color="info" />
      ))}
    </div>
  );
};
