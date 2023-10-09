import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Martingale BET',
  description: 'カジノゲームのBETを管理するためのサイトです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
