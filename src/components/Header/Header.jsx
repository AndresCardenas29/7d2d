"use client";
import "./style.css";

const urlMods =
	"https://www.dropbox.com/sh/75nd95t0azdo6hs/AACf5KUAGW3ZAL7XSwKTv4cVa?dl=0";
export default function HeaderPage() {
	return (
		<section className="header flex flex-row">
			<h1 className="basis-3/4">
				7D2D-
				<span
					style={{
						color: "rgb(255, 58, 58)",
					}}
				>
					{" "}
					C.P
				</span>
			</h1>
			<div className="basis-3/4">
				<button
					onClick={() => {
						window.open("steam://connect/7d2d.nekdress.online:25700", "_blank");
					}}
				>
					UNIRSE
				</button>
				<button
					onClick={() => {
						let text = "hola";
						const textoLimpio = text.replace(/;/g, "");
						const el = document.createElement("textarea");
						el.value = textoLimpio;
						document.body.appendChild(el);
						el.select();
						document.execCommand("copy");
						document.body.removeChild(el);
						alert(
							"Contraseña pegada en el portapapeles. La contraseña es: hola"
						);
					}}
				>
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
			<div className="basis-3/4">
				<button
					onClick={() => {
						window.open(urlMods, "_blank");
					}}
				>
					DESCARGAR LOS MODS
				</button>
				<br />
			</div>
			<div className="basis-3/4">
				<div className="btnMenu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
