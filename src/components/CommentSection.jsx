import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import {
  addComment,
  deleteComment,
  getComments,
  getPost,
} from "../utils/post-utils/post-services";
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const CommentCard = ({ comment,selectedPost }) => {
  const [isCommentOptions, setIsCommentOptions] = useState(false);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch=useDispatch()
  const deleteClickHandler=()=>{
    dispatch(deleteComment({postId:selectedPost._id,commentId:comment._id}))
  }
  return (
    <div className="mt-2 border-black border-2 p-2 rounded shadow-neu flex justify-between items-center">
      <div>
        <h3 className="text-sm font-semibold">@{comment.username}</h3>
        <p>&emsp; {comment.text}</p>
      </div>
      <div className="relative">
        <BsThreeDotsVertical
          className="cursor-pointer"
          size={20}
          onClick={() => setIsCommentOptions(!isCommentOptions)}
        />
        {isCommentOptions && (
          <ul className="absolute right-4 bg-bgColor rounded">
            {currentUser.username === selectedPost.username && (
              <li className="whitespace-nowrap flex items-center p-2 cursor-pointer rounded gap-1 hover:bg-lightOrange " onClick={deleteClickHandler}>
                <AiFillDelete size={20}/>
                Delete Comment
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

const calculateComments = (comments, postType) =>
  !postType ? comments?.slice(0, 2) : comments;
const CommentSection = ({ postId, postType }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const { selectedPost, commentState } = useSelector((state) => state.posts);
  const { currentUser } = useSelector((state) => state.users);
  useEffect(() => {
    if (commentState === "idle") {
      dispatch(getPost(postId));
      dispatch(getComments(postId));
    }
  }, [postId, commentState]);
  const { comments } = selectedPost;
  const commentsToBeShown = calculateComments(comments, postType);
  const addCommentHandler = () => {
    setInputText("");
    dispatch(
      addComment({
        commentData: {
          username: currentUser.username,
          text: inputText,
        },
        postId,
      })
    );
  };
  return (
    <div className="p-2">
      {commentState !== "fulfilled" ? (
        <ClipLoader />
      ) : (
        <div>
          <h2 className="text-md font-semibold">
            Comments ({comments?.length})
          </h2>
          {commentsToBeShown?.map((comment) => (
            <CommentCard key={comment._id} comment={comment} selectedPost={selectedPost} />
          ))}
          {!postType && (
            <Link
              to={`/post/${postId}`}
              className="block mt-4 text-gray-500 hover:underline hover:decoration-solid"
            >
              Load all comments
            </Link>
          )}
        </div>
      )}
      {postType === "single-post" && (
        <div className="mt-2 border-black border-2 p-2 rounded shadow-neu flex justify-between items-center ">
          <div>
            <h3 className="text-md font-semibold">@{currentUser.username}</h3>
            <label htmlFor="text"></label>
            <input
              type="text"
              id="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="ml-4 p-2 rounded focus:outline-none w-3/4"
              placeholder="Add comment"
            />
          </div>
          <button
            onClick={addCommentHandler}
            className="bg-primary inline-block text-white px-2 h-fit py-2 border-black border-solid shadow-neu border-2 sm:text-sm"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
