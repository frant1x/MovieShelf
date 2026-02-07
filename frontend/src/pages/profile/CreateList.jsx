import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import SectionHeader from "../../components/ui/SectionHeader";
import { Form, Button } from "react-bootstrap";

const CreateList = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    visibility: "public",
    ranked: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("lists/", formData);
      console.log("Успішно створено:", response.data);
      navigate("/profile/lists");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      <section className="mb-3">
        <SectionHeader title="New List" />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="My List"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="This is my movie list"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="visibility">
            <Form.Label>Visibility</Form.Label>
            <Form.Select
              required
              value={formData.visibility}
              onChange={handleChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="ranked">
            <Form.Check
              type="checkbox"
              label="Ranked List"
              checked={formData.ranked}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default CreateList;
