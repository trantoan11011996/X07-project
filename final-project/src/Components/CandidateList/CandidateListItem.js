import { Button, Image, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";

export default function CandidateListItem({ data, handleValue }) {

    const [status, setStatus] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [avatar, setAvatar] = useState("");

    const [createDate, setCreateDate] = useState("");

    const token = localStorage.getItem('token');
    const userToken = JSON.parse(token);


    useEffect(() => {
        if (data.status == "accepted") {
            setStatus("Đã xác nhận")
        } else if (data.status == "denied") {
            setStatus("Đã từ chối")
        } else if (data.status == "pending") {
            setStatus("Đang chờ")
        };

        const splitString = data.cv.split("/");
        const cvString = splitString[1] + "/".concat(splitString[2]);
        setDownloadLink(cvString);

        let crTime = new Date(data.createAt).getTime();
        let crDay = new Date(crTime).getDate();
        let crMonth = new Date(crTime).getMonth() + 1;
        let crYear = new Date(crTime).getFullYear();
        let newCreate = `${crDay}-${crMonth}-${crYear}`;
        setCreateDate(newCreate);

        if (data.userId.avatar) {
            let imgSplit = data.userId.avatar.split("/");
            let imgString = imgSplit[1] + "/".concat(imgSplit[2]);
            setAvatar(imgString)
        }
    }, [data]);


    return (
        <Card className="list-item mt-3 mb-3">
            <Row>
                <Col sm={3} md={3}>
                    {data.userId.avatar
                        ? <Image className="list-avatar mt-1" src={`https://xjob-mindx-production.up.railway.app/${avatar}`} />
                        : <Image className="list-avatar mt-1" src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" />
                    }
                </Col>
                <Col className="p-2">
                    <p className="mt-2"> Tên ứng viên: {data.userId.info.fullName} </p>
                    <p className="mt-2"> Ngày gởi yêu cầu: {createDate}</p>
                    <p className="mt-2"> File đính kèm:
                        <a href={`https://xjob-mindx-production.up.railway.app/${downloadLink}`} download>
                            <Button className="download-button ms-2"> <span> Tải xuống </span></Button>
                        </a>
                    </p>
                    <p className="mt-2"> Trạng thái yêu cầu: {status}</p>
                </Col>
            </Row>

            <Row className="button-row mb-2">
                <Col sm={6} md={6}>
                </Col>
                <Col sm={6} md={6}>
                    <Space wrap className="space-wrap">
                        {status == "Đã xác nhận" || status == "Đã từ chối"
                            ? <Row>
                                <Col sm={4} md={4}></Col>
                                <Col sm={4} md={4}></Col>
                                <Col sm={4} md={4}>
                                    <button className="view-button">
                                        Xem thông tin ứng viên
                                    </button>
                                </Col>

                            </Row>
                            : (<>
                                <button className="apply-button ms-2" value="accepted" onClick={(e) => handleValue(e, data._id)}>
                                    Xác nhận
                                </button>
                                <button className="denied-button" value="denied" onClick={(e) => handleValue(e, data._id)}>
                                    Từ chối
                                </button>
                                <button className="view-button">
                                    Xem thông tin ứng viên
                                </button>
                            </>)}

                    </Space>
                </Col>
            </Row>
        </Card>
    )
}