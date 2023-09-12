import "./style.css";
export default function ModalV1({ children, Title, textCenter }) {
	// let Title = "Titulo del Modal";
	let Content = "Contenido del modal";
	return (
		<>
			<div className="Modal">
				<section className="Title">{Title}</section>
				<br />
				<section className={`Content ${textCenter == true ? "center" : null}`}>
					{children}
				</section>
			</div>
		</>
	);
}
