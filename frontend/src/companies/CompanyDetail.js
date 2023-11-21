import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import JoblyApi from '../common/api';
import JobCardList from '../jobs/JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';


// Shows details on each company from the list.

const CompanyDetail = () => {
  const { handle } = useParams();
  console.debug('CompanyDetail', 'handle=', handle);

  const [company, setCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompany() {
      let result = await JoblyApi.getCompany(handle);
      setCompany(result);
      setIsLoading(false);
    }
    getCompany();
  }, [handle]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h2>
        {company.name}

      </h2>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
};

export default CompanyDetail;
