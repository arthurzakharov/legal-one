import React from 'react';
import HomeTable from '../../components/home-table/home-table.component';
import PageTitle from '../../components/page-title/page-title.component';
import PageContent from '../../components/page-content/page-content.component';

const HomePage = () => {
  return (
    <>
      <PageTitle title="General report" />
      <PageContent>
        <HomeTable />
      </PageContent>
    </>
  );
};

export default HomePage;
