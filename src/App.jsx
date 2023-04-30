import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout, { loader as loadCountries } from "./pages/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		loader: loadCountries,
		id: "root",
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <p>Error</p>,
			},
			{
				path: "/:country",
				element: <Details />,
				errorElement: <p>Error</p>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
