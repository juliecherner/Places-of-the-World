import { useState, useEffect } from "react";
import CommentsList from "../comments-list";
import NewComment from "../new-comment";
import Api from "../../api/Api";
import { Button } from "@mui/material";

import "./comments-area.css";
const CommentsArea = ({ placeId }) => {
  const [addCommentMode, setAddCommentMode] = useState(false);
  const [comments, setComments] = useState([]);

  const handleClick = () => {
    setAddCommentMode(!addCommentMode);
  };

  const getComments = async () => {
    const { data } = await Api.get(`api/comment/?placeId=${placeId}`);
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="place-page-comments-area">
      <div>
        <CommentsList comments={comments} />
        <Button variant="contained" onClick={handleClick}>
          Rate the place
        </Button>
      </div>

      {addCommentMode && (
        <NewComment
          placeId={placeId}
          setComments={setComments}
          comments={comments}
        />
      )}
    </div>
  );
};

export default CommentsArea;
