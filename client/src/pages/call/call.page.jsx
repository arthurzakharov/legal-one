import React from 'react';
import CallTable from '../../components/call-table/call-table.component';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';

const CallPage = () => {
  return (
    <>
      <PageTitle title="Report by phone number" />
      <PageContent>
        <CallTable />
      </PageContent>
    </>
  );
};

export default CallPage;
