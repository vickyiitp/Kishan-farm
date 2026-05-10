/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ExploreProperties from './pages/ExploreProperties';
import PropertyDetails from './pages/PropertyDetails';
import LoginSignup from './pages/LoginSignup';
import SellerDashboard from './pages/SellerDashboard';
import ListProperty from './pages/ListProperty';
import AIRecommendation from './pages/AIRecommendation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="explore" element={<ExploreProperties />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="list-property" element={<ListProperty />} />
          <Route path="ai-recommendation" element={<AIRecommendation />} />
        </Route>
        <Route path="/auth" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}
