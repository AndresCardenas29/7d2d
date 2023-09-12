"use client";
import "./style.css";
export default function HeaderPage() {
	return (
		<section className="header flex flex-row">
			<h1 className="basis-2/4">
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
			<div className="basis-2/4">
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
