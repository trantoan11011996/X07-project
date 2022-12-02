import { Button } from "antd";
import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserContext } from "../../../Context/UserContext";
import ListJobs from "./ListJobs/ListJobs";

// export default function HomeJobs (){
//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const GetJobsForHp = async () => {
//     await axios
//       .get("https://xjob-mindx.herokuapp.com/api/recruiments/home-page")
//       .then((res) => {
//         const data = res.data;
//         setJobs(data);
//         setIsLoading(false);
//         if (!localStorage.getItem("jobs")) {
//           localStorage.setItem("jobs", JSON.stringify(data));
//           console.log(jobs);
//         }
//       })
//       .catch((error) => console.log(`error: ${error}`));
//   };
//   useEffect(() => {
//     GetJobsForHp();
    
//   }, []);

export default function HomeJobs() {

    const { user } = useSelector((state) => state.auths);



    return (
        <Container className="home-jobs">

            <Row>
                <Col sm={8} md={8}>
                    <Row className="navigate-header text-start m-3">
                        {user?.user.role == "candidate" && (
                            <>
                                <Row>
                                    <Col sm={2} md={2}>
                                        <Button> Xem tất cả</Button>
                                    </Col>

                                    <Col sm={2} md={2}>
                                        <Button> Tin đã ứng tuyển</Button>
                                    </Col>
                                    <Col sm={8} md={8}></Col>
                                   
                                </Row>

                            </>
                        )}

                        {user?.user.role == "recruiter" && (
                            <>
                                <Row>
                                    <Col sm={2} md={2}>
                                        <Button> Xem tất cả</Button>
                                    </Col>

                                    <Col sm={2} md={2}>
                                        <Button> Tạo tin</Button>
                                    </Col>

                                    <Col sm={2} md={2}>
                                        <Button> Tin đã tạo</Button>
                                    </Col>
                                    <Col sm={6} md={6}></Col>
                                    
                                </Row>

                            </>
                        )}

                        {!user && (
                            <>
                                <Row>
                                    <Col sm={2} md={2}>
                                        <Button> Xem tất cả</Button>
                                    </Col>
                                    <Col sm={10} md={10}></Col>
                                    
                                </Row>
                            </>
                        )}
                    </Row>

                    <Row>
                        <ListJobs />
                    </Row>
{/* 
                    <Row>
                        <Col md={3}>
                            item
                        </Col>
                        <Col md={3}>
                            item
                        </Col>
                        <Col md={3}>
                            item
                        </Col>
                        <Col md={3}>
                            item
                        </Col>
                    </Row> */}
                </Col>

                <Col>
                    <Image className="image ms-5" src="https://linkpower.vn/storage/photos/bai%20viet/h%C3%A0nh%20ch%C3%ADnh%20nh%C3%A2n%20s%E1%BB%B1/B%C3%ACa%20web%20tuy%E1%BB%83n%20d%E1%BB%A5ng.jpg"></Image>
                </Col>
            </Row>

        </Container>
    )
}
