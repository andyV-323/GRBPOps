import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './layout/Home';
import Welcome from './features/home/Welcome';
import MissionControl from './features/missions/MissionControl';
import VehicleSim from './features/garage/VehicleSim';
import Armory from './features/armory/Armory';
import CommunityOPS from './features/community/CommunityOPS';
import CreateOPS from './features/community/CreateOPS';
import ImportOPS from './features/community/ImportOPS';
import Dashboard from './features/dashboard/Dashboard';
import HomeLayout from './layout/HomeLayout';
import AboutPage from './features/home/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Home />
              <Welcome />
            </>
          }
        />
      </Route>
      <Route path="/" element={<HomeLayout />}>
        <Route path="missions">
          <Route index element={<MissionControl />} />
        </Route>
        <Route path="garage">
          <Route index element={<VehicleSim />} />
        </Route>
        <Route path="armory">
          <Route index element={<Armory />} />
        </Route>
        <Route path="community">
          <Route index element={<CommunityOPS />} />
        </Route>
        <Route path="community/create">
          <Route index element={<CreateOPS />} />
        </Route>
        <Route path="community/import">
          <Route index element={<ImportOPS />} />
        </Route>
        <Route path="dashboard">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="about">
          <Route index element={<AboutPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
