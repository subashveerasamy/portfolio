import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from './EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 60px;
    position: relative;
    z-index: 1;
    @media (max-width: 960px) {
         padding: 0;
    }
         
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: #F2F3F4;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #b1b2b3;
    padding-left: 25px;
    padding-right: 25px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
        
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
       align-items: flex-center;
    }
`;

const EducationTimeline = () => {
    const data={
    education : [
        {
            "id" : 0,
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Own1I_wthbZppxYTY2d8V_LL89CeBgEpzw&s",
            "school" : "VSB Engineering College",
            "date" : "2019 - 2023",
            "grade" : "8.2 CGPA",
            "desc" : "I successfully completed my Bachelore's degree in (B.Tech in chemical Engineering) from VSB Engineering College in April 2023 Throughout the four-year of program, I completed 8 semesters with a CGPA of 8.2",
            "degree" : "Bachelore of Technology - B.Tech, Chemical Engineering"
        },
        {
            "id" : 1,
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9M-Uq9Xu7tJPaqJwWg5BkeXkSeBfcAJZZWw&s",
            "school": "KSV Higher Secondary School, ThulasiKodumbur",
            "date" : "2017 - 2019",
            "grade" : "88.8%",
            "desc" : "Completed my HSC ( Higher Secondary Education) in from KSV Hr. Sec. School, ThulasiKodumbu",
            "degree" : "Higher Secondary (XII)"
        },
        {
            "id": 2,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVxyDqF4oAA_ex_NJ4wxuWxogKSfP3ImLJA&s",
            "school": "Government Higher Secondary School, palayajeyankondam",
            "date" : "2016 - 2017",
            "grade" : "96.4%",
            "desc" : "I completed my class 10 eduction at Govt. Hr. Sec. School, Palayajeyankondam",
            "degree" : "SSLC(X)"
        }
    ]}
    return(
        <Container id='aaaa' className='pb-5'>
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My education details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {data.education.map((edu, index) => (
                            <TimelineItem key={edu.id} >
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <EducationCard education={edu} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined' color='secondary' />
                                   
                                        <TimelineConnector style={{ background: '#854CE6'}} />
                                    
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default EducationTimeline;