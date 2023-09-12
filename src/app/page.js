import Header from "@/components/Header/Header";
import HomeInfo from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modals/ModalV1";

export default function Home() {
	return (
		<main
			style={{
				overflowY: "hidden",
			}}
		>
			<div
				style={{
					zIndex: 1,
					background: "rgba(0,0,0,.3)",
				}}
			>
				<Header />
			</div>
			<div
				style={{
					// backgroundColor: "red",
					height: "70vh",
					background: "rgba(0,0,0,.3)",
				}}
			>
				<HomeInfo />
			</div>
			<div
				style={{
					backgroundColor: "black",
					height: "20vh",
				}}
			>
				<Footer />
			</div>

			<div style={ModalsStyles}>
				<Modal Title="Contraseña del servidor" textCenter={true}>
					<span style={{ fontWeight: "700", textAlign: "center" }}>hola</span>
				</Modal>
			</div>
		</main>
	);
}

const ModalsStyles = {
	width: "100vw",
	height: "100vh",
	display: "none",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	background: "rgba(0,0,0,.6)",
	zIndex: "1000",
	top: "0",
	backdropFilter: "blur(3px)",
};
