export function Footer() {
  return (
    <>
      <div>This Website is Powered by DigitalPlat FreeDomain,Get a free domain from DigitalPlat.</div> {/* 页脚一言 */}
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank">MIT LICENSE</a>
      <span>
        <span>NewsNow © 2024 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}
