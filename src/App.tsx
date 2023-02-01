import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ListaProductos from "./components/listaProductos/ListaProductos";
import FormProducto from "./components/formProducto/FormProducto";
import Button from "./elements/Button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App bg-negro text-blanco w-screen h-screen">
			<Nav />
			<ul className="flex flex-col">
				<Main />
				<Login />
				<Register />
				<ListaProductos />
				<FormProducto />
				<div className="w-[100px]">
					<Button label="registrarse" />
				</div>
			</ul>
		</div>
	);
}

export default App;
