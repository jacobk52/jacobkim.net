import React from "react"
import Card from "react-bootstrap/Card"
import Fade from "react-reveal/Fade"
import data from "../data.js"

const individual = (d) => {
  if (d.b){
    const w=d.location=="North York, Ontario"?"100%":"200px"
    return (<Card>
      <Card.Body>
      <img src={d.logo} style={{display:"block","margin-left":"auto","margin-right":"auto","margin-bottom":"25px",width:w}}/>
      <Card.Title>
        {d.title}
      </Card.Title>
      <Card.Text>
      <i>{d.date}</i><br/><br/>
      {d.location}<br/><br/>
      <b>{d.team}</b><br/><br/>
      {d.summary}
      <ul style={{"padding-left": "1.2em"}}>{d.b.map(c=><li>{c}</li>)}</ul>
      </Card.Text>
    </Card.Body>
    </Card>)
  } else {
    return (<Card>
      <Card.Body>
      <img src={d.logo} style={{display:"block","margin-left":"auto","margin-right":"auto","margin-bottom":"25px",width:"200px"}}/>
      <Card.Title>
        {d.title}
      </Card.Title>
      <Card.Text>
      <i>{d.date}</i><br/><br/>
      {d.location}<br/><br/>
      <b>{d.team}</b><br/><br/>
      {d.summary}
      </Card.Text>
    </Card.Body>
    </Card>)
  }
}

const Experience = () => {
    return (
    <div className="section" id="experience">
    <div className="container">
      <div className="experience-container">
        <Fade bottom cascade>
      <h1>Experience</h1>
      </Fade>
      {data.experience.map(c=>individual(c))}
      </div>
      </div>
      </div>
    )}

export default Experience