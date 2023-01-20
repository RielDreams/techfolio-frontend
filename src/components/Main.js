import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import { useEffect, useState } from "react";

function Main(props) {
	//Creating state for portfolio
	const [portfolio, setPortfolio] = useState(null);
	const url = "http://localhost:4000/portfolio/";

	const getPortfolio = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setPortfolio(data);
	};

	useEffect(() => {
		getPortfolio();
	}, []);

  useEffect(() => {
    getUser()
    getPortfolio()
  }, []);

  return (
    <Routes>
      <Route 
        path='/'
        element={<Index />}
      />
      <Route 
        path='/explore'
        element={<div className="portfolioDisplay"><Explore portfolio={portfolio}/></div>}
      />
      <Route 
        path='/login'
        element={<Login getUser={getUser}/>}
      />
      <Route 
        path='/registration'
        element={<Registration createUser={createUser}/>}
      />
      <Route 
        path='/portfolio/new'
        element={<New createPortfolio={createPortfolio}/>}
      />
      <Route 
        path='/portfolio/:id'
        element={<Show getPortfolio={getPortfolio}/>}
      />
      <Route 
        path='/portfolio/:id/edit'
        element={<Edit 
          updatePortfolio={updatePortfolio} 
          getPortfolio={getPortfolio}/>}
          updateUser={updateUser}
          getUser={getUser}
      />
    </Routes>
  )
} 

export default Main;
