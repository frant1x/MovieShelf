import SectionHeader from "../../components/ui/SectionHeader";
import { Form, Button } from "react-bootstrap";

const CreateList = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="mb-3">
        <SectionHeader title="New List" />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="My List" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="This is my movie list"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Visibility</Form.Label>
            <Form.Select>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="ranked">
            <Form.Check type="checkbox" label="Ranked List" />
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
