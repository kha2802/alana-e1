import type { Metadata } from "next";
import { } from "next/font/google";
import "./globals.css";
import MenuTop from "../views/menu-top";
import { montserrat } from "./fonts";
import LoadingPage from "@/components/loading-page/LoadingPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Script from "next/script";

export const metadata = {
  title: 'Alana City – Bản Giao Hưởng Mặt Trời',
  description: 'Mở bán đất nền Alana City chính thức...',
  openGraph: {
    title: 'Alana City – Bản Giao Hưởng Mặt Trời',
    description: 'Mở bán đất nền Alana City chính thức...',
    url: 'https://www.alana-city.vn/',
    images: ['https://www.alana-city.vn/images/logos/logo.png'],
    siteName: 'Alana City',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alana City – Bản Giao Hưởng Mặt Trời',
    description: 'Mở bán đất nền Alana City chính thức...',
    images: ['https://www.alana-city.vn/images/logos/logo.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
        <meta property="og:title" content="KHU ĐÔ THỊ ALANA CITY - BẤT ĐỘNG SẢN BÌNH DƯƠNG " />
        <meta property="og:description" content="Mở bán đất nền Alana City chính thức - Chính sách Ưu Đãi &amp; Giá bán Alana City TRỰC TIẾP chủ đầu tư ⭐ Giỏ hàng nội bộ cho VIP. Click ngay!!!" />
        <meta property="og:image" content="https://alana-city.vn/images/logos/logo.png" />
        <meta property="og:image:alt" content="Alana City" />
        <meta property="og:site_name" content="Alana City" />
        <meta property="og:url" content="https://alana-city.vn/" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Mở bán đất nền Alana City chính thức - Chính sách Ưu Đãi &amp; Giá bán Alana City TRỰC TIẾP chủ đầu tư ⭐ Giỏ hàng nội bộ cho VIP. Click ngay!!!
"></meta>
        <meta name="robots" content="all" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/ico" />
        {/* <!-- Google Tag Manager --> */}
        <Script
          strategy="afterInteractive"
          id="googletag-manager-header"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGJ7STRN');
          `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Admicro Tag Manager --> */}
        <Script
        strategy="afterInteractive"
        id="admicro-script"
        dangerouslySetInnerHTML={{
          __html: `
              function(a, b, d, c, e) {a[c] = a[c] || [];
        a[c].push({"atm.start": (new Date).getTime(), event: "atm.js" });
        a = b.getElementsByTagName(d)[0]; b = b.createElement(d); b.async = !0;
        b.src = "//deqik.com/tag/corejs/" + e + ".js"; a.parentNode.insertBefore(b, a)
                })(window, document, "script", "atmDataLayer", "ATM2NSH8B3TKV");
            `,
        }}
      />
        {/* <!-- End Admicro Tag Manager --> */}

      </head>
      <body className={`${montserrat.className}`}>
        <MenuTop />
        {children}
        <LoadingPage />
        <ToastContainer />

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGJ7STRN"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>

      {/* Google Tag Manager Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-481731916"
      />
      <Script
        strategy="afterInteractive"
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-481731916');
            `,
        }}
      />
    </html>
  );
}
