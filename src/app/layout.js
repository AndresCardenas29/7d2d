import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '7D2D - Cerebros Podridos',
  description: 'Servidor 7D2D LATAM Español',
  icons: {
    icon: "./favicon.ico"
  }
}

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<link rel="icon" href="./favicon.ico" sizes="any" />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
