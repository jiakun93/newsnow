export function Footer() {
  const currentYear = new Date().getFullYear(); // 自动获取当前年份
  
  return (
    <>
      <div>天灰灰会不会，让我忘记你是谁</div> {/* 页脚一言 */}
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
