"use client";
import "./style.css";
import img from "./bg4.webp";
export default function HeaderPage() {
	return (
		<div className="cont">
			<div className="contHome">
				<div>
					<h3>SERVIDOR</h3>
				</div>
				<div>
					<h1>7 DAYS TO DIE</h1>
				</div>
				<div>
					<h1>CEREBROS PODRIDOS</h1>
				</div>
				<div>
					<button
						onClick={() => {
							window.open(
								"steam://connect/7d2d.nekdress.online:25800",
								"_blank"
							);
						}}
					>
						UNIRSE
					</button>
					<button onClick={() => {
						let text = "hola";
						const textoLimpio = text.replace(/;/g, "");
						const el = document.createElement("textarea");
						el.value = textoLimpio;
						document.body.appendChild(el);
						el.select();
						document.execCommand("copy");
						document.body.removeChild(el);
						alert("Contraseña pegada en el portapapeles. La contraseña es: hola")
					}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
							/>
						</svg>
					</button>
				</div>
				<div>
					<button
						onClick={() => {
							window.open(
								"https://www.dropbox.com/scl/fi/txkcfd19tckp2bdq7vaoa/Mods.zip?rlkey=npv2vw782cpjh8wzoro4ch8e8&dl=0",
								"_blank"
							);
						}}
					>
						DESCARGAR LOS MODS
					</button>
				</div>
				<div>
					<a>Como instalar los mods</a>
				</div>
			</div>
		</div>
	);
}
