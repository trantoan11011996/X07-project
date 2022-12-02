import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

export default function JobItem({ job }){

    return (
        <Container className="job-item text-start">
            <Card style={{width: '100%'}}> 
                <Card.Body>
                    <Card.Title>Title: {job.title}</Card.Title>
                    <Card.Text>
                        <h2> Company: {job.name}</h2>
                        <p> Posititon: {job.position}</p>
                        <p> Description:{job.description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}