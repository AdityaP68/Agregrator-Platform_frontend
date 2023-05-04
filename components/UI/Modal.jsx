import React, { useState } from "react";
import styles from "./Modal.module.scss";
import axios from "axios";
import { useCookies } from "react-cookie";

function Modal({ modalState }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    post_type: "",
    resource_type: "",
    resource_goal: "",
  });

  const cookies = useCookies();
  const userId = cookies[0].user._id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("this is form data", formData);

    try {
      const response = await axios.post(
        `http://localhost:9000/posts/create/${userId}`,
        formData
      );
      console.log(response);
      modalState(false);
    } catch (error) {
      console.error(error);
      // TODO: Display an error message to the user
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span onClick={() => modalState(false)}>X</span>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <label>Title</label>
              <input
                className={styles.title}
                type="text"
                name="title"
                placeholder="Enter the Post Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRow}>
              <label>Description</label>
              <input
                className={styles.description}
                type="text"
                name="description"
                placeholder="Enter the Post Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRow}>
              <label>Post Type</label>
              <input
                className={styles.postType}
                type="text"
                name="post_type"
                placeholder="Enter the Post Type"
                value={formData.post_type}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRow}>
              <label>Resource Type</label>
              <input
                type="text"
                className={styles.resourceType}
                name="resource_type"
                placeholder="Enter the Resource Type"
                value={formData.resource_type}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRow}>
              <label>Resource Goal</label>
              <input
                type="number"
                className={styles.resourceGoal}
                name="resource_goal"
                placeholder="Enter the Resource Goal"
                value={formData.resource_goal}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
