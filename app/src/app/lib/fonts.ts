import { Nerko_One, Jost as Jost_Font } from 'next/font/google'

export const NerkoOne = Nerko_One({ weight: '400', subsets: ['latin'], variable: '--font-nerko', preload: true })
export const Jost = Jost_Font({ weight: ['400', '600'], subsets: ['latin', 'cyrillic'], variable: '--font-jost', preload: true })
