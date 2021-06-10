import React from 'react';
import * as bs from 'react-bootstrap'
export default function Fraud(props) {
  return (
    <bs.Row>
                <bs.Col md='1'></bs.Col>
                <bs.Col md='10'>
    <div>
      <bs.Card.Header as="h2">Avoiding Fraud</bs.Card.Header>
      <br /><br />
      <h3><b>How to Determine if it is Safe to Donate to a Campaign</b></h3>
      <h6>1. How is the campaign organizer related to the intended recipient of the donations?</h6>
      <h6>2. What is the purpose of the campaign and how will the funds be used?</h6>
      <h6>3. Are direct family and friends making donations and leaving supportive comments?</h6>
      <h6>4. Is the intended recipient in control of the withdrawals? If not, is there a clear path for the funds to reach them?</h6>
      <br /><br />
      <h3><b>Common Online Scams:</b></h3>
      <br></br>
      <h5><b>Sweetheart/Romance Scams: </b></h5>
      <h6>A sweetheart or romance scam involves building trust by pretending to be romantically interested in someone and then using that trust to commit fraud. Some fraudulent activity can include stealing a victim's money, bank and credit card information, or even their identity.</h6>
      <br />
      <h5><b>Catfish Scams: </b></h5>
      <h6>Often used with romance scams, catfishing is when an individual uses a fake identity in order to trick a victim. When talking online to someone you don't personally know, do your best to verify their identity and never send money to someone without 100% confidence in their identity or story. </h6>
      <br />
      <h5><b>Offers related to your campaign: </b></h5>
      <h6>If you see a GoFundMe opening advertised on social media, you can always verify the job opportunity by visiting Careers at GoFundMe. While employees are encouraged to post about job openings on social media,  be careful of posts that require you to direct message the individual.</h6>
      <h6>These are often scams and are not affiliated with legitimate job offers from GoFundMe.</h6>
      <br /><br /><br /><br />
      <div class="text-center">
        <h3>Helpful GoFundMe Links</h3>
        <br />
        <a href="https://www.gofundme.com/contact/suggest/fraud"><bs.Button>Report Fraud</bs.Button></a>         <a href="https://www.gofundme.com/contact/suggest/donor"><bs.Button>Donor Claim</bs.Button></a>
      </div>
      <br /><br /><br /><br />
      <div class="text-bottom">NOTE: All of the information and recommendations on this page are provided by GoFundMe. For more information, visit <a href="https://www.gofundme.com/">www.gofundme.com</a>.</div>
      <br />
    </div>
    </bs.Col>
    </bs.Row>
  )
} 