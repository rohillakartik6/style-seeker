import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function NewNote({ data }) {
    // useEffect(() => {
    //     console.log(t);
    // });
    return (
        <>
            <Card className="m-3  center" >
                <Card.Img className="w-100" variant="top" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                {/* <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header> */}
                <Card.Body className="m-2">
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.body}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </>
    );
}

export default NewNote;
