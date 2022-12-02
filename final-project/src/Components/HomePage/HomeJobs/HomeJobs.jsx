import { Button } from "antd";
import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {BsFillFilePostFill} from "react-icons/bs"
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        <Col sm={12} md={12}>
          <Row className="navigate-header text-start m-3">
            {user?.user.role == "candidate" && (
              <>
                <Row className="job-navigate-container">
                  <Col md={2} className="col-title">
                    <h1 className="homejob-title-header">Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={2} md={2}>
                    <Link className="homejob-title homejob-title-link">
                      Xem tất cả{" "}
                      <span>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </span>
                    </Link>
                  </Col>

                  <Col sm={2} md={2}>
                    <Button> Tin đã ứng tuyển</Button>
                  </Col>
                  <Col sm={6} md={6}></Col>
                </Row>
              </>
            )}

            {user?.user.role == "recruiter" && (
              <>
                <Row className="job-navigate-container">
                  <Col sm={2} md={2} className="homejob-title">
                    <h1 className="homejob-title-header" >Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={2} md={2}>
                    <Link className="homejob-title homejob-title-link">
                      Xem tất cả{" "}
                      <span>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </span>
                    </Link>
                  </Col>

                  <Col sm={2} md={2}>
                  <Link className="homejob-title homejob-title-link">
                      Tin đã đăng{" "}
                      <span>
                      </span>
                    </Link>
                  </Col>

                  <Col sm={2} md={4}>
                  <Link className="homejob-title homejob-title-link">
                      Đăng tin tuyển dụng{" "}
                      <span>
                      <BsFillFilePostFill></BsFillFilePostFill>
                      </span>
                    </Link>
                  </Col>
                </Row>
              </>
            )}

            {!user && (
              <>
                 <Row className="job-navigate-container">
                  <Col sm={2} md={2} className="homejob-title homejob-title-header">
                    <h1 >Việc làm hấp dẫn</h1>
                  </Col>
                  <Col sm={2} md={2}>
                    <Link className="homejob-title homejob-title-link">
                      Xem tất cả{" "}
                      <span>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                      </span>
                    </Link>
                  </Col>
                  <Col sm={2} md={4}>
                  <Link className="homejob-title homejob-title-link">
                      Đăng tin tuyển dụng{" "}
                      <span>
                      <BsFillFilePostFill></BsFillFilePostFill>
                      </span>
                    </Link>
                  </Col>
                  </Row>
              </>
            )}
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col>
              <ListJobs/>
        </Col>
      </Row>
    </Container>
  );
}
