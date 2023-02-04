import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ContentJody extends React.Component {
    render() {
        return(
            <Container className="content p-5" id="profile">
                    <div className="main text-center">
                        <h3 className="fs-1 fw-bold display-3">My Profile</h3>
                    </div>
            <Row className="mt-5 text-center">
                <Col>
                    <h2 className="fs-2 mb-5 mt-4 display-3">Keahlian Saya</h2>
                    <p className="fs-5 fst-italic">Saya Mempunyai beberapa keahlian seperti bisa mengoperasikan microsoft word atau excel, Mengerti HTML, CSS, dan dasar Javascript.</p>
                </Col>
                <Col xs={5}>
                    <h2 className="fs-2 mb-5 mt-4 display-3">Pengalaman Saya</h2>
                    <p className="fs-5 fst-italic">Saya pernah bekerja di perusahaan Rekso Nasional Food, sebagai crew PKWT. Berawal dari tahun 2018 sampai 2021. Alasan saya keluar dari perusahaan karna abis kontrak.</p>
                </Col>
                <Col>
                    <h2 className="fs-2 mb-5 mt-4 display-3">Kelemahan Saya</h2>
                    <p className="fs-5 fst-italic">Saya tidak menguasai bahasa asing, saya tidak bisa bekerja di keramaian, dan saya kurang percaya diri atas hasil yang saya peroleh.</p>
                </Col>
            </Row>
            </Container>
        )
    }
}