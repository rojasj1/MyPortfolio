import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '/Users/justinrojas/Desktop/Portfolio/my-portfoliosite/src/assets/prof.png';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
            <Cell col = {12}>
            <img 
            src = {profilePic}
            alt = "avatar"
            className = "avatar-img"
            />
            <div className = "banner-text">
            <h1>ETL Developer</h1>
            <hr/>
            <p>Java | Ruby on Rails | Oracle | MySQL | SQL Server | Apache Hadoop | Apache HBase | Apache Hive | Apache Pig | Apache Sqoop | Ab-Initio | HTML/CSS | Unix/Linux | Python3 | Anaconda | Spring | Springboot</p>

            <div className = "social-links">

            {/*LinkedIn*/}
            < a href = "https://www.linkedin.com/in/justin-rojas-a7b0b2157/" rel="noopener noreferrer" target = "_blank">
            <i className ="fa fa-linkedin" aria-hidden="true"></i>
            </a>

            {/*LinkedIn*/}
            < a href = "https://github.com/rojasj1" rel="noopener noreferrer" target = "_blank">
            <i className ="fa fa-github" aria-hidden="true"></i>

            </a>
            </div>

            </div>

            </Cell>
            
            </Grid>
            </div>
        )
    }
}
export default Landing;