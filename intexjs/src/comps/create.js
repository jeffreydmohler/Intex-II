import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountryState from './Country'
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {Link} from 'react-router-dom'


const axios = require('axios')

const patty = (x) => {
    if(x > 65) return "Excellent"
    else if(x > 55) return "Good"
    else if(x > 45) return "Average"
    else if(x > 35) return "Fair"
    else if(x > 0) return "Poor"
    else return "Predict"
 }

let score = 0;
let bill = patty(score)

let e
let country
let es
let state

export default function Create(props) {
    return (
        <CreateController />
    )
}
const CreateController = props => {

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                title: "",
                description: "",
                location_country: "",
                location_state: "",
                has_beneficiary: "",
                is_charity: "",
                goal_lnplus: 0, 
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                console.log('validating', values)
                if (!values.title) {
                    errors.title = '*Required'
                }
                if (values.title.length > 200) {
                    errors.title = 'Shorter Title'
                }
                if (!values.description) {
                    errors.description = '*Required'
                }
                if (values.has_beneficiary === "") {
                    errors.description = 'Beneficiary is Required'
                }
                if (values.is_charity === "") {
                    errors.description = 'Organzier Type is Required'
                }

                return errors
            }}
            onSubmit={handleSubmit, async (values, actions) => {
                e = document.getElementById("cntry")
                country = e.options[e.selectedIndex].value
                values.location_country = country

                es = document.getElementById("state")
                state = es.options[es.selectedIndex].value
                values.location_state = state

                console.log('submit', values)
                const resp = await axios.post('/api/predict/', {
                    values
                    // enter in all the values
                })
                console.log(resp.data)
                score = resp.data
                bill = patty(score)

                document.documentElement.scrollTop = 0;

                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve()

                        actions.setSubmitting(false)
                    }, 2000)
                })
            }}
        >{form => (
            <CreateForm form={form}/>)}</Formik>
    )
}

const CreateForm = props => (
    <Form>
        <bs.Container>
            <bs.Card.Header as="h5">Predict a Campaign</bs.Card.Header>
            
            {/* <bs.Row> &nbsp;</bs.Row> */}
            <bs.Row>
                <bs.Col md="10">
                    <bs.Card.Body>
                        <Input title="Title:" name="title" type="text" disabled={props.form.isSubmitting} />
                        <Input title="Description:" name="description" type="text" as="textarea" />
                        <span className="form-label">Location:</span> <br />
                        {/* {<Field names={['location_country','location_state']} component={CountryState}/>} */}
                        {/* <CountryDropdown
                            name="location_country"
                            value={props.values.location_country}
                            valueType="short"
                            onChange={(_, e) => props.handleChange(e)} onBlur={props.handleBlur}
                            priorityOptions={["US", "CA", "GB"]}
                            disabled={props.form.isSubmitting} /> */}
                        <CountryState disable={props.form.isSubmitting}/><br/>
                        <span className="form-label">Has a specific beneficiary been declared?</span> <br/>
                        <Radio name="has_beneficiary" type="radio" label="Yes" value="TRUE" />
                        <Radio name="has_beneficiary" type="radio" label="No" value="FALSE" />

                        <br/><br/>
                        <span className="form-label">Campaign organizer type:</span><br/>
                        <Radio name="is_charity" type="radio" label="Charitable Organization" value="TRUE" />
                        <Radio name="is_charity" type="radio" label="Individual" value="FALSE" /><br/><br/>

                        <Input title="Fundraising Goal (USD)" name="goal_lnplus" type="number" disabled={props.form.isSubmitting} width="25%" />
                        

                        <Link to='/boost-camp' className="ml-1" style={{fontSize:"13px", color: "blue"}}>How can I boost my success score?</Link>

                    </bs.Card.Body>
                    <bs.Button type="submit" disabled={props.form.isSubmitting} className="mb-4 w-100 ml-3">
                        <bs.Spinner animation="border" variant="success" size="sm" style={{ visibility: props.form.isSubmitting ? 'visible' : 'hidden' }} />
                        &nbsp;  &nbsp; Predict
                    </bs.Button> 
                    
                </bs.Col>
                <br/><br/>
                <bs.Col md="2">
                <br/>
                    <AnimatedProgressProvider valueStart={0} valueEnd={score} duration={1.4} easingFunction={easeQuadInOut}>
                        {value => {
                            return (
                                <CircularProgressbarWithChildren value={value} /*   text={`${roundedValue}%`} */ styles={buildStyles({ pathTransition: "none" })}>
                                    <div style={{
                                        color: "#3e98c7", // dominantBaseline: "left",
                                        fontSize: "20px", // textAnchor: "left"
                                    }}>{bill} </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider><br/>
                    <span className="text-center form-label"> Success Score: {parseFloat(score).toFixed(2)}</span>
                    <br/><Link to="/success-score" style={{fontSize:"13px", color: "blue"}}>What determines success?</Link>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Form>
)
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                {...rProps.field}
                disabled={props.disabled}
                as={props.as}
                style={{ display: "block", width: props.width, }}
                maxLength={400}
                
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)


const Radio = (props) => (
    <Field name={props.name}>{rProps => (
            <bs.Form.Check
                inline
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                {...rProps.field}
                disabled={props.disabled}
                label={props.label}
                value={props.value}
            />
    )}</Field>
)
