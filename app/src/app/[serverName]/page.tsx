import Server from '@/app/components/server'

export async function generateStaticParams(a: any) {
  return [{ serverName: 'kuru' }]
}

export default function Page({ serverName }: { serverName: string }) {
  return <Server />
}
