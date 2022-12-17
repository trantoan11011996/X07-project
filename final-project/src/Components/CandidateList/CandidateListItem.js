import { Button, Space } from "antd";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function CandidateListItem(data) {
    return (
        <Card className="list-item mt-3 mb-3">
            <Row>
                <Col sm={3} md={3}></Col>
                <Col className="p-2">
                    <p className="mt-2"> Số thứ tự: {data.id}</p>
                    <p className="mt-2"> Tên ứng viên: {data.name} </p>
                    <p className="mt-2"> Ngày gởi yêu cầu: {data.creatAt}</p>
                    <p className="mt-2"> File đính kèm:</p>
                    <p className="mt-2"> Trạng thái yêu cầu:</p>
                </Col>
            </Row>

            <Row className="button-row mb-2">
                <Col sm={6} md={6}>
                    <Space wrap>
                        <Button className="apply-button ms-2">
                            Xác nhận
                        </Button>
                        <Button className="denied-button">
                            Từ chối
                        </Button>
                        <Button className="candiate-button">
                            Xem thông tin ứng viên
                        </Button>
                    </Space>
                </Col>
                <Col sm={6} md={6}></Col>
            </Row>
        </Card>
    )
}