import React from 'react';
import nlpfy from '../Assets/Images/nlpfy.jpg'
import sp from '../Assets/Images/socket_python.png'
import nc from '../Assets/Images/network_congestion.jpg'
import arduino from '../Assets/Images/arduino.jpg';
import tt from '../Assets/Images/travel_tour.jpg'
import nids from '../Assets/Images/nids.png';
import Card from './Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardInfo from './CardInfo'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'NLPfy',
                    subTitle: 'Based on NLP Algorithms',
                    about: 'Created an NLP Model and deployed it using Streamlit Framework to create a Web Application that preforms various tasks such as Sentiment Analysis, Named Entity Recognition (text and URL) and Text Summarization. Built Text Summarizer using TextRank Algorithm along with Stemming, Stopwords, and Word Embedding Models (GloVe). Used Beautiful Soup for extracting text from websites for analysing different types of tags in the text.',
                    imgSrc: nlpfy,
                    link: 'https://github.com/rahulvit32/NLPfy',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Network Congestion',
                    subTitle: 'Based on ML & DL Algorithms',
                    about: 'Built a predictive model (Multi-class Classifier) to find the type of network congestion for the telecom industry based on tower and user-level activities consisting of 36 features of around 80,000 datasets. Used ML algorithm such as Logistic regression, Decision Tree, Support Vector Machine on training data to classify data. Also, used advanced ML algorithms like Random Forest, Neural Network and Ensemble methods followed by feature engineering and fine-tuning of the model parameters to further improve the results.',
                    imgSrc: nc,
                    link: 'https://github.com/rahulvit32',
                    selected: false
                },
                {
                    id: 2,
                    title: 'IPC using sockets',
                    subTitle: 'Based on socket and tinker GUI ',
                    about: 'Successfully established an inter-process communication between server machine and client machines to chat in a friendly and compatible GUI format. Used an important OS library of python named psutil to achieve our goal. Also, we have used tkinter GUI for communication.',
                    imgSrc: sp,
                    link: 'https://github.com/rahulvit32/InterProcess-Communication-using-sockets',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Medicine Alarm System',
                    subTitle: 'Based on Arduino-Uno',
                    about: 'Integrated the real-time module to check time corresponding to an alarm set in our Arduino based device. Implemented a cardboard box using servo motor which will give you what particular medicine you need to take. The device displays the current Date and Time using the LCD.',
                    imgSrc: arduino,
                    link: 'https://github.com/rahulvit32/Medicine-Reminder-Using-Arduino',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Travel Tour',
                    subTitle: 'Based on HTML, CSS , PHP & SQL',
                    about: 'This website helps you to find a volunteer for your tour to get the most out of your vacation. You can select the volunteer based on ratings and reviews given by other peoples. Used SQL for fetching user information and their selected volunteer details. ',
                    imgSrc: tt,
                    link: 'https://github.com/rahulvit32/traveltour',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Network Intrusion Detection System',
                    subTitle: 'Based on ML Algorithms',
                    about: 'In this model, I implemented an algorithm for Network Intrusion Detection System (NIDS) in which I have taken NSL-KDD dataset regarding various malicious attack which might infect our network.I have implemented simple auto- encoder as well as stacked auto - encoder and compared their accuracy with other Machine Learning algorithms like random forest and logistic regression.',
                    imgSrc: nids,
                    link: 'https://github.com/rahulvit32/Network-Intrusion-Detection-System',
                    selected: false
                }
            ]
        }
    }

    // handleCardClick = (id, card) => {
    //     let items = [...this.state.items]
    //     items[id].selected = items[id].selected ? false : true
    //     items.forEach(item => {
    //         if (item.id !== id) {
    //             item.selected = false
    //         }
    //     });
    //     this.setState({ items });
    // }

    makeItems = (items) => {
        return items.map(item => {
            return (<div>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>
                        <Col xs={12} sm={3} md={3} lg={3}><Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /></Col>
                        <Col xs={12} sm={9} md={9} lg={9}><CardInfo title={item.title} subTitle={item.subTitle} about={item.about} link={item.link} /></Col>
                    </Row>
                </Col>
            </div>)
        })
    }

    render() {
        return (
            <Container>
                {/* <Row className='justify-content-around'> */}
                {this.makeItems(this.state.items)}
                {/* </Row> */}
            </Container>
        )
    }
}

export default Carousel;