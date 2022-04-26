import React from 'react';
import './CV.css';

// const CV = () => {

export class CV extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "all"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleClick(event) {
        this.setState({value: event.target.value})
        // alert('Your favorite flavor is: ' + this.state.value);
    };

    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <lable>Choose:</lable>
            <select value={this.state.value} onClick={this.handleClick} name="cv" id="cv-select">
                <option value="">--Please choose an option--</option>
                <option value="education">Education and Qualifications</option>
                <option value="work-experience">Work Experience</option>
                <option value="extra-curricular">Extra-Curricular Experience</option>
                <option value="awards">Awards and Scholarships</option>
                <option value="languages">Languages</option>
            </select>
            </form>
        )
    }
}

//     return (
//         <div>
//             <h1 class="Heading">Faith Ho</h1>
//             <hr class="horizontal-break"></hr>
//             <form onSubmit={this.handleSubmit}>
//             <lable>Choose:</lable>
//             <select value={this.state.value} onClick={this.handleClick} name="cv" id="cv-select">
//                 <option value="">--Please choose an option--</option>
//                 <option value="education">Education and Qualifications</option>
//                 <option value="work-experience">Work Experience</option>
//                 <option value="extra-curricular">Extra-Curricular Experience</option>
//                 <option value="awards">Awards and Scholarships</option>
//                 <option value="languages">Languages</option>
//             </select>
//             </form>
//             <hr class="horizontal-break"></hr>
//             <h3 class="section-title">Education and Qualifications</h3>
//             <table>
//                 <tr>
//                     <td>
//                         MSc International Political Economy 
//                     </td>
                   
//                 </tr>
//                 <tr>
//                     <td>
//                         London School of Economics and Political Science, UK
//                     </td>
//                 </tr>
//             </table>
//             <hr class="horizontal-break"></hr>
//             <h3 class="section-title">Work Experience</h3>
//             <hr class="horizontal-break"></hr>
//             <h3 class="section-title">Extra-Curricular Experience</h3>
//             <hr class="horizontal-break"></hr>
//             <h3 class="section-title">Awards and Scholarships</h3>
//             <hr class="horizontal-break"></hr>
//             <h3 class="section-title">Languages</h3>


//         </div>
//     )
// }

// export default CV