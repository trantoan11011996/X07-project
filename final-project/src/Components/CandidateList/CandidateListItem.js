import { Button, Space } from "antd";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function CandidateListItem({data}) {

    const [status, setStatus] = useState("");
    const [downloadLink, setDownloadLink] = useState("");

    if( data?.status == "Accepted") {
        setStatus("Đã xác nhận")
    } else if (data?.status == "denided") {
        setStatus("Đã từ chối")
    } else if (data?.status == "pending") {
        setStatus("Đang chờ")
    };
    
    const splitString = data?.cv.slpitString("/");
    const imageString = splitString[1] + "/".concat(splitString[2]);
    setDownloadLink(imageString)


    return (
        <Card className="list-item mt-3 mb-3">
            <Row>
                <Col sm={3} md={3}></Col>
                <Col className="p-2">
                    <p className="mt-2"> Tên ứng viên: {data?.userId?.info?.fullName} </p>
                    <p className="mt-2"> Ngày gởi yêu cầu: {data?.recruimentId?.createAt}</p>
                    <p className="mt-2"> File đính kèm: <a href={`https://xjob-mindx-production.up.railway.app/${downloadLink}`} download></a></p>
                    <p className="mt-2"> Trạng thái yêu cầu: {status}</p>
                </Col>
            </Row>

            <Row className="button-row mb-2">
                <Col sm={6} md={6}>
                </Col>
                <Col sm={6} md={6}>
                <Space wrap>
                        <Button className="apply-button ms-2">
                            Xác nhận
                        </Button>
                        <Button className="denied-button">
                            Từ chối
                        </Button>
                        <Button className="view-button">
                            Xem thông tin ứng viên
                        </Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}