import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getApiHostImage } from "../../config";
import { UserContext } from "../../Context/UserContext";
import { images } from "../../img/index";

export default function CompanyDetail() {

    const [companyData, setCompanyData] = useState();
    const { getCompanyInfo } = useContext(UserContext);
    const { id } = useParams();
    const [logo, setLogo] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const detailData = async () => {
            await getCompanyDetail();
        };
        detailData();
    }, [id]);

    const getCompanyDetail = async () => {
        let data = await getCompanyInfo(id);
        if (data) {
            setCompanyData(data);
            const image = data?.name?.avatar;
            const splitString = image.split("\\");
            const imageString = splitString[1] + "/".concat(splitString[2]);
            return setLogo(imageString);
        }
        return data;
    };

    return (
        <>
            {companyData && (
                <Container>
                    <Row>
                        <Col sm={9} md={9}>
                            <Card className="job-content mt-3 mb-3">
                                <Card.Img
                                    className="job-banner"
                                    variant="top"
                                    src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_1.svg"
                                />
                            </Card>

                            <Card.Body>
                                <Row className="titte m-2">
                                    <Col className="logo" sm={2} md={2}>
                                        <img
                                            className="image-logo"
                                            src={getApiHostImage() + `${logo}`}
                                        />
                                    </Col>

                                    <Col className="company mt-4" sm={10} md={10}>
                                        <Card.Title className="job-tittle">
                                            {companyData?.info?.name}
                                        </Card.Title>
                                        <h3> {companyData?.info?.address}</h3>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>

                        <Col>
                            <img
                                className="list-banner mb-3 mt-3"
                                src={images.banner}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}