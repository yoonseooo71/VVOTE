type ColorPalette = {
  [key: string]: string;
};

type Theme = {
  colors: {
    light: ColorPalette;
    dark: ColorPalette;
  };
};
const theme: Theme = {
  colors: {
    light: {
      header: "white",
      home: "#E9ECEF"
    },
    dark: {
      header: "black",
      home: "#333"
    }
  }
};
export default theme;