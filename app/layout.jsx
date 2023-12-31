import { Newsreader} from 'next/font/google'
import './globals.css'

const newsReader = Newsreader({ weight: ['400','800'],
subsets: ['latin'] })

export const metadata = {
  title: 'Jared Delgado',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body style={{backgroundColor: '#0B0D0F'}}>
        {children}
      </body>
    </html>
  )
}
