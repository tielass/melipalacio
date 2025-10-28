import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        font-size: 16px;
        scroll-behavior: smooth;
      }

      @font-face {
        font-family: "Syne";
        src: url("/fonts/Syne-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Syne";
        src: url("/fonts/Syne-Medium.ttf") format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Syne";
        src: url("/fonts/Syne-SemiBold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Syne";
        src: url("/fonts/Syne-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Syne";
        src: url("/fonts/Syne-ExtraBold.ttf") format("truetype");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }

      body {
        font-family:
          "Syne",
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          sans-serif;
        line-height: 1.6;
        color: #000000;
        background-color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      ul,
      ol {
        list-style: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: 1.2;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #8b5cf6;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #7c3aed;
      }
    `}
  />
);
