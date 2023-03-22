import './globals.css'

export const metadata = {
  title: 'What can i cook',
  description: 'the best recipe website to find what to cook',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
