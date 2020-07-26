import React, { Component } from "react"; 
import './CVPage.css';
import { Document, Page, pdfjs } from "react-pdf";
import pdf from '../Assets/rahul_cv.pdf';
const src = pdf;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends Component {

    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber } = this.state;

        return (
            <div>
                <h2>My CV</h2>
                <Document
                    file={src}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={600} />
                </Document>
            </div>
        );
    }
}