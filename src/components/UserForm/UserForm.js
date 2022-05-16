import { Button, Card, Col, Row, TextInput } from "react-materialize";

const UserForm = ({ userInfoCallBack }) => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, name, phone } = event.target.elements;
    const buyer = { email: email.value, name: name.value, phone: phone.value };
    userInfoCallBack(buyer);
  };

  return (
    <Row>
      <form onSubmit={handleFormSubmit}>
        <Col>
          <Card textClassName="white-text">
            <TextInput id="email" placeholder="Email" />
            <TextInput id="name" placeholder="First Name" />
            <TextInput id="phone" placeholder="telefono" />
            <Button type="submit">Aceptar</Button>
          </Card>
        </Col>
      </form>
    </Row>
  );
};

export default UserForm;
