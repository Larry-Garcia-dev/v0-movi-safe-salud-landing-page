import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'MoviSafe Salud | Seguridad y Salud en el Trabajo',
  description: 'Consultoría especializada en Seguridad y Salud en el Trabajo. Transformamos la SST de una obligación legal a una ventaja estratégica.',
  generator: 'v0.app',
  keywords: ['SST', 'Seguridad y Salud en el Trabajo', 'Consultoría', 'Colombia', 'SG-SST'],
  icons: {
    icon: [
      {
        url: '/images/logo.jpeg', // Punto en lugar de coma
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/image/logo.jpeg', // Añadido '/' inicial para rutas absolutas
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/logo.jpeg',
        type: 'images/jpeg',      // El 'type' debe ser el formato MIME (image/jpeg)
      },
    ],
    apple: '/images/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
