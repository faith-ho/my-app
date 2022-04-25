import React from 'react';
import profile from '../Images/profile.jpg';

function About() {

  const styles = {
    color: "red",
    fontSize: 25
  }

  return (
    <div>
      <h1 style={styles}>About</h1>
      <h5>This is my About page</h5>
      <h2>Education</h2>
            <tr>
                <td><img witdth="200" height="200" src={profile}/></td>
                <td><h3>Faith Ho</h3></td>
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
};

export default About
