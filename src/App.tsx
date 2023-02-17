import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import ListaProductos from "./components/listaProductos/ListaProductos";
import FormProducto from "./components/formProducto/FormProducto";
import SignForm from "./components/signForm/SignForm";
import Test from "./Test";

function App() {
	return (
		<div className="App bg-blanco text-negro-500 w-screen h-screen overflow-x-hidden">
			<Nav />
			{/* <Test /> */}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/signForm/">
					<Route path="login" element={<SignForm />} />
					<Route path="register" element={<SignForm />} />
				</Route>

				<Route path="/productlist" element={<ListaProductos />} />
				<Route path="/productform" element={<FormProducto />} />
				<Route
					path="/productform/modify/:productId"
					element={<FormProducto />}
				/>
			</Routes>
		</div>
	);
}

export default App;
