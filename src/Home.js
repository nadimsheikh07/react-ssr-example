import React, { Suspense } from 'react';
const component_url = "Component/Topbar/Topbar"
function Home(props) {

  const Topbar = React.lazy(() => import(`./${component_url}`));

  return (
    <div className="Home">
      <Suspense fallback={<div>Loading...</div>}>
        <Topbar />
      </Suspense>
      <h1 className="red">Hello {props.name}!</h1>
    </div>
  );
};

export default Home;
