import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import UserContext from '../UserContext';
import './JobCard.css';


// Shows each individual card component. Gives simple detail on each job on the list.

const JobCard = ({ id, title, salary, equity, companyName }) => {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    console.debug('JobCard useEffect update applied status', 'id=', id);
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <Card key={id} className="JobCard mb-3">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <h6>{companyName}</h6>
        <CardText>Salary: {salary ? salary : 'TBA'}</CardText>
        <CardText>Equity: {equity ? equity : 0}</CardText>
        <Button
          onClick={handleApply}
          disabled={applied}
          color="danger"
          className="font-weight-bold text-uppercase float-right"
        >
          {applied ? 'Applied' : 'Apply'}
        </Button>
      </CardBody>
    </Card>
  );
};

export default JobCard;
