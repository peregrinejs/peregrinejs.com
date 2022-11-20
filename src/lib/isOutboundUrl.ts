export default function isOutboundUrl(url: string): boolean {
  return url.startsWith('https://')
}
