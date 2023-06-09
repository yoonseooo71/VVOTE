type ColorPalette = {
  [key: string]: string;
};

type Theme = {
  light: {
    colors: ColorPalette
  }
  dark: {
    colors: ColorPalette
  }
};
const theme: Theme = {
    light:{
      colors : {
        font: "#1c1e21",
        mainBackground: "#E9ECEF",
        subBackground: "#FEFEFE",
        loginForm: "#F1F3F5",
        icon: "black",
        post: "#FEFEFE",
      },
    },
    dark: {
      colors: {
        font: "#e3e3e3",
        mainBackground: "#1B1B1D",
        subBackground: "#242526",
        loginForm: "#090A11",
        icon: "white",
        post: "#242526",
      }
    }
};
export default theme;