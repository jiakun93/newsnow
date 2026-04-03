export function Footer() {
  return (
    <footer className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-500">
      {/* 页脚一言 */}
      <a
        href="https://dash.domain.digitalplat.org/signup?ref=tmApCBc9BL"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-blue-500 hover:underline text-center"
      >
        This Website is Powered by DigitalPlat FreeDomain, Get a free domain from DigitalPlat.
      </a>

      {/* License */}
      <a
        href={`${Homepage}/blob/main/LICENSE`}
        target="_blank"
        className="hover:underline"
      >
        MIT LICENSE
      </a>

      {/* 作者信息 */}
      <span>
        <span>NewsNow © 2024 By </span>
        <a href={Author.url} target="_blank" className="hover:underline">
          {Author.name}
        </a>
      </span>
    </footer>
  )
}
