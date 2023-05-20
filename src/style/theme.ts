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
        font: "black",
        header: "#FEFEFE",
        home: "#E9ECEF",
        icon: "black"
      },
    },
    dark: {
      colors: {
        font: "white",
        header: "black",
        home: "#212426",
        icon: "white"
      }
    }
};
export default theme;