export type userT = {
	nombre: string;
	token: string;
};
export type loginT = {
	usuario: string;
	password: string;
};

export type registerT = {
	nombre: string;
	apellido: string;
	usuario: string;
	email: string;
	password: string;
};

export type productT = {
	id: string;
	codigo: string;
	descripcion: string;
	activo: boolean;
	detalle_productos: [
		{
			detalle_producto_id: string;
			descripcion: string;
			stock: number;
			precio: string;
			activo: boolean;
		}
	];
	productos_categorias: [
		{
			categoria_id: string;
			categoria: {
				descripcion: string;
				activo: boolean;
			};
		}
	];
};
