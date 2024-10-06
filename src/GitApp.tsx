import { Outlet } from 'react-router-dom';

export const GitApp = () => {
  return (
    <div className="container m-auto max-w-7xl mt-2 mb-2">
      <h1>
        Issue Tracker <small>for the React's GitHub Repo</small>
      </h1>
      <Outlet />
    </div>
  );
};
