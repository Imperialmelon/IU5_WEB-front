import {Container, Spinner} from "react-bootstrap";
export const Animation = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};