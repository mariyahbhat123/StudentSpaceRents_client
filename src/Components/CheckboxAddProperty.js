import Form from "react-bootstrap/Form";

function CheckboxAddProperty() {
  return (
    <Form>
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Breakfast"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Lunch"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Dinner"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckboxAddProperty;
