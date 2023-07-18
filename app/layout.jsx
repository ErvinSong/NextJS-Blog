import './globals.css'
import Nav from './auth/Nav'
import QueryWrapper from "./auth/QueryWrapper"

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <body className={"bg-green-400"}>
          <QueryWrapper>
            <Nav />
            {children}
          </QueryWrapper>
        </body>
      </head>
    </html>
  )
}
