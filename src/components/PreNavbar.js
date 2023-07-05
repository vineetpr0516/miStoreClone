import React from 'react'
import "../styles/PreNavbar.css"


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>

const PreNavbar = () => {
  return (
    <div className="PreNav">
      <div>
        <a href = "https://www.mi.com/in/">MI India </a><span>|</span>
        <a href = "https://www.mi.com/in/store">store </a><span>|</span>
        <a href = "https://www.mi.com/in/service/authorized_stores/">Authorized stores </a><span>|</span>
      </div>

      <div>
        <a href = "https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252Fservice%2525252Fauthorized_stores%2525252F%252526sign%25253DMzUxNDIzMjE0MWY1YjBiMDBmOTYyYjYzNjg1MzUxNTZhMTg3MWU1OQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252Fservice%252Fauthorized_stores%252F%26sign%3DMzUxNDIzMjE0MWY1YjBiMDBmOTYyYjYzNjg1MzUxNTZhMTg3MWU1OQ%2C%2C&_sign=HZ8l2cYpPeROgO91yY0D1xN89lE%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">Sign In </a><span>|</span>
        <a href = "https://in.account.xiaomi.com/fe/service/register?bizDeviceType=&theme=&needTheme=false&showActiveX=false&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&_locale=en_IN&checkSafePhone=false&_sign=HZ8l2cYpPeROgO91yY0D1xN89lE%3D&source=&region=IN&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252Fservice%2525252Fauthorized_stores%2525252F%252526sign%25253DMzUxNDIzMjE0MWY1YjBiMDBmOTYyYjYzNjg1MzUxNTZhMTg3MWU1OQ%25252C%25252C%2526sid%253Di18n_in_pc_pro&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252Fservice%252Fauthorized_stores%252F%26sign%3DMzUxNDIzMjE0MWY1YjBiMDBmOTYyYjYzNjg1MzUxNTZhMTg3MWU1OQ%2C%2C&_uRegion=IN">Sign Up </a><span>|</span>
        <a href = "https://store.mi.com/in/cart">{cartIcon} CART (0)</a><span>|</span>
      </div>


    </div>
  )
}

export default PreNavbar