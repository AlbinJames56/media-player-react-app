import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import {
  addVideoCategoryAPI,
  getVideoCategoryAPI,
  deleteCategoryAPI,
  getAVideoAPI,
  updateCategoryAPI,
} from "../../services/allAPI";
import Vediocard from "./Vediocard";
function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = async () => {
    if (categoryName) {
      const result = await addVideoCategoryAPI({ categoryName, allVideos: [] });
      if (result.status > 199 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    }
  };
  // console.log(allCategories);

  const getCategories = async () => {
    const { data } = await getVideoCategoryAPI();
    setAllCategories(data);
  };
  const handleDelete = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };
  useEffect(() => {
    getCategories();
  }, []);

  const dragOver = (e) => {
    console.log("Video over");
    e.preventDefault();
  };
  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    
    try {
        const response = await getAVideoAPI(videoId);
        console.log("API Response:", response);

        const data = response.data; // Adjust this depending on your response structure
        if (!data) {
            console.error("No data retrieved for video ID:", videoId);
            return;
        }

        const selectedCategory = allCategories.find((item) => item.id === categoryId);

        if (!selectedCategory) {
            console.error("Category not found for ID:", categoryId);
            return;
        }

        selectedCategory.allVideos.push(data);
        console.log("Updated category with new video:", selectedCategory);
        await updateCategoryAPI(categoryId, selectedCategory);
        getCategories();
    } catch (error) {
        console.error("Error during video drop:", error);
    }
};
  return (
    <div className="me-4">
      <div className="d-grid  ">
        <button className="btn btn-info w-50" onClick={handleShow}>
          Add Category
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingName"
              label="category"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div
            className="border rounded p-1 ps-2 me-4 mt-2"
            droppable="true"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDropped(e, category?.id)}
          >
            <div className="d-flex justify-content-between align-item-center">
              <h5 className="mt-2">{category?.categoryName}</h5>
              <button className="btn">
                <i
                  className="fa-solid fa-trash text-dark "
                  onClick={() => handleDelete(category?.id)}
                ></i>{" "}
              </button>
            </div>
            <Row>
              {category?.allVideos?.length > 0
                ? category.allVideos.map((card) => (
                    <Col sm={12} className="mb-2">
                      <Vediocard video={card} />
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        ))
      ) : (
        <p>Nothing to Display</p>
      )}
    </div>
  );
}

export default Category;
