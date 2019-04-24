/*
/ https://htmlcolorcodes.com/es/
/ https://unsplash.com/search/photos/transparent
/ https://www.vectorstock.com/free-vectors/
/ https://iconos8.es/icons/set/background
*/
const skyBlue = '#1565C0';
const darkSkyBlue = '#0D47A1';
const white = '#FFFFFF';
const gray = '#616161';
const ligthGray = '#E0E0E0';// #C0C0C0
const darkGray = '#424242'; // #212121
const black = '#000000';
const red = '#C62828';
const pink = '#F06292';
const disabled = '#F48FB1';
const shadow = 'rgba(0, 0, 0, 0.75)';
const primary = skyBlue;
const secundary = darkSkyBlue;
const accent = white;

// colors
var Colors = {
    primary, secundary, accent, disabled, shadow,
    skyBlue, darkGray, white, gray, darkGray, ligthGray, black, red, pink
};

// font sizes
const defaultFontSize = normalFontSize;
const miniatureFontSize = 10;
const smallerFontSize = 12;
const smallFontSize = 14;
const normalFontSize = 16;
const bigFontSize = 18;
const biggerFontSize = 20;
const giantFontSize = 22;

var FontSize = {
    defaultFontSize,
    miniatureFontSize, smallerFontSize, smallFontSize, normalFontSize,
    bigFontSize, biggerFontSize, giantFontSize
};

// border sizes
const separator = 1;

var Borders = {
    separator
};


export { Colors , FontSize, Borders };