import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './CompanyCard.css';

// Shows basic information on each company.

const CompanyCard = ({ handle, name, description, logoUrl }) => {
  return (
    <Link to={`/companies/${handle}`} className="CompanyCard">
      <Card className="CompanyCard mb-3">
        <CardBody>
          <CardTitle>
            {name}

          </CardTitle>
          <p>{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CompanyCard;
