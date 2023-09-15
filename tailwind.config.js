/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Key point : 在其他樣式都是基本默認的配置之下, 額外添加自定義的樣式, 下方舉例添加
    extend: {
      // 自定義螢幕尺寸
      screens:{
        vsm:'400px',
        vmd:'850px'
      },
      // 額外添加自定義顏色
      colors:{
        primary:'#0d6efd',
        secondary:'#6c757d',  // 灰色
        success:'#198754',
      },
      // 額外添加自定義間距, margin,padding,width,height等距離有關樣式
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // 額外添加自定義字體
      fontFamily:{
        simple:['Ma Shan Zheng'],
        english:['Noto Sans TC']
      },
      lineHeight:{
        '14':'56px',
      },
      boxShadow:{
        btnShadow:'0 0.2rem 0.2rem #000',
        boxShadow:'0 0 50px #000'
      }

    },
  },
  plugins: [],
}
