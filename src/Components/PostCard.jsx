import React, { useEffect, useState } from "react";
import user2 from "../assets/images/user.png";
import like from "../assets/icons/like.svg";
import comment from "../assets/icons/comment.svg";
import moment from "moment";
import axios from "axios";
import { getUser } from "../UserContext/UserContext";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
const PostCard = ({ post, reload, setReload, onLike }) => {
  //console.log(post);
  const { user } = getUser();
  const { id } = user;
  const [haveImage, setHaveImage] = useState(true);
  const [Flag, setFlag] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [commentState, setCommentState] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const checkifLiked = () => {
      if (post.likes.includes(id)) setIsLiked(true);
      const check = post.likes.filter((like) => like._id == id);
      //console.log(check);
      if (check[0]) setIsLiked(true);
    };
    checkifLiked();
  }, []);

  useEffect(() => {
    const fetchCommentsByPost = async () => {
      //console.log("eee");
      const { data } = await axios.get(
        `http://localhost:3000/api/forum/posts/${post._id}/comments`
      );
      if (!data) console.log("error fetching comments");
      console.log(data);
      setComments(data);
    };
    fetchCommentsByPost();
  }, [reload]);
  const hoverdrop =
    "font-Montserrat hover:border-r-4 hover:border-slate-500  hover:bg-gradient-to-r from-white to-gray-200 rounded-lg  p-2 w-40";

  const handleShowDrop = () => {
    setFlag(!Flag);
  };

  const handleLike = async () => {
    const { data } = await axios.put(
      `http://localhost:3000/api/forum/posts/${post._id}/like`,
      { author: id }
    );
    setIsLiked(!isLiked);
    onLike(!reload);
  };

  const handleAddComment = async () => {
    const response = await axios.post(
      `http://localhost:3000/api/forum/posts/${post._id}/comment`,
      { userId: id, content: commentState }
    );

    if (response) {
      console.log("success");
      setCommentState("");
      onLike(!reload);
    }
  };

  const handleDelete = async () => {
    const response = await axios.delete(
      `http://localhost:3000/api/forum/posts/${post._id}`,
      { data: { author: id } }
    );
    if (response) setReload(!reload);
  };

  return (
    <div className="relative m-auto w-full rounded-lg border-2">
      <div className="flex justify-between">
        <div className="flex gap-2 p-8">
          <img
            src={user2}
            className="w-16 rounded-lg bg-gradient-to-b from-slate-500 to-gray-50"
            alt=""
          />
          <div className="flex flex-col justify-center p-1">
            <h2 className="flex-2 font-Monda font-medium">
              {post.author.username}
            </h2>
            <p className="font-Montserrat text-sm font-light text-slate-500">
              {moment(post.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div
          onClick={handleShowDrop}
          className="relative m-8 h-12 w-12 cursor-pointer rounded-full transition-colors duration-200 hover:bg-slate-100"
        >
          <h2 className="absolute bottom-4 right-3 text-4xl text-slate-500">
            ...
          </h2>
          {!Flag && (
            <div>
              <div className="absolute left-2 top-8 h-9 w-9 rotate-45 rounded-lg border-2 border-gray-100 bg-gray-50"></div>
              <div className="absolute top-11 rounded-lg border-2 border-gray-100 bg-gray-50">
                <ul>
                  <li className={hoverdrop}>Report</li>
                  <li className={hoverdrop}>See Comments</li>
                  {post.author._id == id && (
                    <li onClick={handleDelete} className={hoverdrop}>
                      delete
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {haveImage && <img className="w-auto" src={user2} alt="" />}
        <p className="font-Montserrat border-b-2 p-4 text-lg">{post.content}</p>
      </div>
      <div className="flex items-center justify-between overflow-hidden px-2 py-2">
        <div
          onClick={handleLike}
          className={` py-1 rounded-md w-[15%]  hover:text-black transition-colors duration-500 cursor-pointer flex gap-2 justify-center items-center font-Montserrat font-medium text-xl ${
            isLiked
              ? "bg-orange-500 text-white "
              : " border-2 border-orange-500"
          }`}
        >
          {/* <img src={like} alt="" /> */}
          <h3>{isLiked ? "Unlike" : "Like"}</h3>
        </div>
        <div
          onClick={() => setShowComments(!showComments)}
          className="font-Montserrat flex w-[15%] cursor-pointer items-center justify-center gap-2 rounded-md rounded-br-lg border-2 border-blue-500 py-1 text-xl font-medium transition-colors duration-500 hover:bg-zinc-200"
        >
          {/* <img src={comment} alt="" /> */}
          <h3>Comment</h3>
        </div>
        <div className="flex w-[33%] justify-center">
          <div
            className="w-[80%] cursor-pointer rounded-md py-2 text-center font-montserrat"
            onClick={onOpen}
          >
            {/* {post.likes.length} Likes */}
            <AvatarGroup size="md" max={2}>
              {post.likes.map((like, index) => (
                <Avatar
                  key={index}
                  name={like.username}
                  src="https://bit.ly/ryan-florence"
                />
              ))}
            </AvatarGroup>
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Liked By</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <ul>
                  {post.likes[0] ? (
                    post.likes.map((like, index) => (
                      <li
                        className="flex items-center gap-2 rounded-lg border-b-2 border-gray-100 bg-gray-50 px-2 py-2 font-montserrat"
                        key={index}
                      >
                        <div className="rounded-full border-2 border-gray-200 p-1">
                          {" "}
                          <img
                            className="h-14 w-14 rounded-full"
                            src={user2}
                            alt=""
                          />
                        </div>
                        {like.username}
                      </li>
                    ))
                  ) : (
                    <h2 className="text-center font-montserrat">
                      There is no Likes
                    </h2>
                  )}
                </ul>
              </div>
            </ModalBody>

            <ModalFooter>
              <button
                className="bg-blue-500 px-3 py-2 font-montserrat text-white"
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      {showComments && (
        <div>
          <div className="relative h-28 w-full rounded-b-lg">
            <textarea
              value={commentState}
              onChange={(e) => setCommentState(e.target.value)}
              className="h-28 w-[86%] rounded-md border-2 outline-none"
              name=""
              id=""
            >
              {" "}
            </textarea>
            <button
              onClick={handleAddComment}
              className="absolute right-2 top-[30%] rounded-md bg-orange-500 px-4 py-2 font-montserrat text-xl text-white"
            >
              post
            </button>
          </div>
          <div className="mt-2 flex w-full flex-col gap-3">
            {comments.map((comment, index) => (
              <div className="flex gap-2" key={index}>
                <div className="rounded-full border-2 border-gray-500 p-1">
                  {" "}
                  <img className="h-14 w-14 rounded-full" src={user2} alt="" />
                </div>
                <div className="w-[90%] rounded-r-xl p-1 text-xl font-semibold">
                  <div>{comment.user.username}</div>
                  <div className="font-poppins text-lg font-light">
                    {comment.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
