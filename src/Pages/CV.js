import React from 'react';
import './CV.css';

const CV = () => {
    return (
        <div>
            <h1 class="Heading">Faith Ho's CV</h1>
            <hr class="horizontal-break"></hr>
            <h2>Education</h2>
            <tr>
                <td><img witdth="100" height="100" src="https://netherlanddwarfbunny.com/wp-content/uploads/2017/09/netherland-dwarf-bunny-not-needy-1.jpg"/></td>
                <td><h3>Rabbit</h3></td>
            </tr>
            <hr class="horizontal-break"></hr>
            <h2>Work Experience</h2>
            <hr class="horizontal-break"></hr>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tr>
                    <td>2022</td>
                    <td>Deloitte</td>
                </tr>
                <tr>
                    <td>2021</td>
                    <td>Inline</td>
                </tr>
            </table>
            <hr class="horizontal-break"></hr>
            <h2>Skills</h2>
            <table cellSpacing="10">
                <tr>
                    <td>Walking</td>
                    <td>⭐️⭐️</td>
                    <td>Running</td>
                    <td>⭐️</td>
                </tr>
                <tr>
                    <td>Writing</td>
                    <td>⭐️</td>
                    <td>Laughing</td>
                    <td>⭐️⭐️⭐️</td>
                </tr>
            </table>
        </div>
    )
}

export default CV;