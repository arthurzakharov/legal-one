import React from 'react';
import AgentTable from '../../components/agent-table/agent-table.component';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';

const AgentPage = () => {
  return (
    <>
      <PageTitle title="Report by agent" />
      <PageContent>
        <AgentTable />
      </PageContent>
    </>
  );
};

export default AgentPage;
