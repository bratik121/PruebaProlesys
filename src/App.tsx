import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ListaProductos from "./components/listaProductos/ListaProductos";
import FormProducto from "./components/formProducto/FormProducto";

function App() {
	return (
		<div className="App bg-negro text-morado-500 w-screen h-screen overflow-x-hidden">
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
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
