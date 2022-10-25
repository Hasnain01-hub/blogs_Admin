import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { uid } from "uid";
import "./Post.css";
import "react-toastify/dist/ReactToastify.css";
import asynchandler from "./post";
import Lottie from "react-lottie";
import Form from "./Form.json";
const initialState = {
  title: "",
  content: "",
  slug: "",
  //   date: "",
  images: [],
};
const AddPost = () => {
  const [values, setValues] = React.useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    values.slug = uid(16);
    if (values.title === "" || values.content === "") {
      return toast.error("Please fill all the fields");
    }

    await asynchandler(values).then((res) => {
      console.log(res);
    });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Form,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <>
      <div class="containerevent">
        <div class="cardevent">
          <div class="card-image">
            <Lottie className="eventgif" options={defaultOptions} loop={true} />
          </div>
          <form class="card-form" onSubmit={handleSubmit}>
            <div class="input">
              <input
                type="text"
                name="title"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Title</label>
            </div>
            <div class="input">
              <input
                type="text"
                name="content"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Description</label>
            </div>
            {/* <div class="input">
              <input
                type="text"
                name="speaker"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Date</label>
            </div> */}
            {/* <div class="input">
              <input
                type="text"
                name="venue"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Venue</label>
            </div> */}
            {/* <div class="input"> */}
            {/* <input
                type="file"
                onChange={handleChange}
                name="images"
                class="input-field"
                required
              /> */}

            {/* <label class="input-label">Image</label> */}
            {/* </div> */}
            <div class="action">
              <button class="action-button">Submit</button>
            </div>
          </form>
          {/* <div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddPost;
