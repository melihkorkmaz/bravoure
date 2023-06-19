import './globals.scss';
import localFont from 'next/font/local';
import { GlobalProvider } from "@/app/providers/GlobalProvider"; 

const helveticaNueu = localFont({
  variable: '--font-helvetica-nueu',
  src: [
    {
      path: '../public/fonts/HelveticaNeueLTStd-Lt.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/HelveticaNeueLTStd-Md.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/HelveticaNeueLTStd-Bd.otf',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="3xl:text-[18px] xl:text-[15px] text-[13px]">
      <body className={`${helveticaNueu.variable} font-sans h-full`}>
      <GlobalProvider>
        {children}
      </GlobalProvider>
      </body>
    </html>
  )
}
