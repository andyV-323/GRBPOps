import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './layout/Home';
import Welcome from './features/home/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Welcome />
              <Home />
            </>
          }
        />
      </Route>

      <Route index element={<Welcome />} />

      {/*} <Route path="garage">
        <Route index element={<FuelSim />} />
      </Route>
      <Route path="dashboard">
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="missions">
        <Route index element={<MissionControl />} />
      </Route>
      <Route path="armory">
        <Route index element={<EquipmentDash />} />
      </Route>
      <Route path="community">
        <Route index element={<CommunityOP />} />
      </Route>
      <Route path="community/create">
        <Route index element={<CreateOP />} />
      </Route>
      <Route path="community/import">
        <Route index element={<UploadOP />} />
  </Route>*/}
    </Routes>
  );
}

export default App;
