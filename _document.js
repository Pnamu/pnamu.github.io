import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const theme = localStorage.getItem("theme");
                document.documentElement.setAttribute("data-theme", theme);
                console.log(theme);
              `,
            }}
          />
          {/* 다른 head 태그 내용 추가, 필요에 따라 변경 가능 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
