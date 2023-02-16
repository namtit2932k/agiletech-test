import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { useEffect, useState } from "react";
import {
  getAllPosts,
  getFilterTitlePosts,
  delPosts,
  createPosts,
  editPosts,
  getPostsByPage,
  logoutUser,
} from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

const Profile = ({ user, axiosJWT }) => {
  const [data, setData] = useState(true);
  const [title, setCreateTitle] = useState("");
  const [desc, setCreateDesc] = useState("");
  const [tags, setCreateTags] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (user?.accessToken) {
      getAllPosts(user.accessToken, dispatch, axiosJWT);
    }
  }, [data]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#root");

  const handleFilterTitle = (e) => {
    getFilterTitlePosts(user.accessToken, e.target.value, dispatch, axiosJWT);
  };

  const handleDel = (e) => {
    if (window.confirm("Are you want to delete this post?") === true) {
      delPosts(user.accessToken, e, dispatch, axiosJWT);
      setData(!data);
      alert("Delete success!");
    }
  };

  const handleEdit = (e) => {
    editPosts(user.accessToken, e, dispatch, axiosJWT);
    setData(!data);
    alert("Edit success!");
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      description: desc,
      tags: tags,
    };
    createPosts(user.accessToken, newPost, dispatch, axiosJWT);
    setData(!data);
    alert("Create success!");
    closeModal();
  };

  const handleGetPostByPage = (e) => {
    getPostsByPage(user.accessToken, e, dispatch, axiosJWT);
  };

  const handleLogout = (e) => {
    if (e !== false) {
      logoutUser(user?.accessToken, dispatch, axiosJWT);
    } else {
    }
  };

  function zToN(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
      result.push(i);
    }

    return result;
  }

  const postList = useSelector((state) => state.posts?.posts?.allPosts);
  const pagesNumber = zToN(postList?.total_page);
  console.log(pagesNumber);

  return (
    <div className="profile">
      <div className="nav">
        <Link className="logo" to="/">
          <div className="col1"></div>
          <div className="col2"></div>
        </Link>

        <Link className="post1" to="/profile">
          Posts
        </Link>
        <Link className="post2" to="/">
          <div onClick={(e) => handleLogout(true)}>Logout</div>
        </Link>
      </div>
      <div className="right">
        <div className="top">
          <button onClick={openModal}>Add New</button>
          <div className="filter">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => handleFilterTitle(e)}
            />
            <input type="text" disabled placeholder="Tags" />
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Descripion</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
            {postList?.posts?.map((item) => (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.tags}</td>
                  <td>
                    <div className="actions">
                      <img
                        src="img/edit.png"
                        alt=""
                        onClick={(e) => handleEdit(item.id)}
                      />
                      <img
                        src="img/del.png"
                        alt=""
                        onClick={(e) => handleDel(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </table>
        </div>

        <div className="pages">
          {pagesNumber.map((item) => (
            <div
              className="page-number"
              onClick={(e) => handleGetPostByPage(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <h2>Add new post</h2>
            <form onSubmit={handleCreatePost} className="create-form">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => setCreateTitle(e.target.value)}
              />
              <label>Description</label>
              <input
                type="text"
                onChange={(e) => setCreateDesc(e.target.value)}
              />
              <label>Tags</label>
              <input
                type="text"
                onChange={(e) => setCreateTags(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
