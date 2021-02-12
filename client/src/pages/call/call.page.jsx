import React from 'react';
import CallTable from '../../components/call-table/call-table.component';
import PageTitle from '../../components/page-title/page-title.component';

const CallPage = () => {
  return (
    <>
      <PageTitle title="Report by phone number" />
      <CallTable />
    </>
  );
};

export default CallPage;
