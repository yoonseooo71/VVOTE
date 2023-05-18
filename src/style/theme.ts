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
        header: "white",
        home: "#E9ECEF"
      },
    },
    dark: {
      colors: {
        header: "black",
        home: "#333"
      }
    }
};
export default theme;