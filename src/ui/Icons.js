import React from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from "./index"

const defaultStyle = {
  margin: 20
}

const Menu = ({ size, color, style, ...props }) => <Ionicons name="menu" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const Back = ({ size, color, style, ...props }) => <Ionicons name="arrow-back" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const Store = ({ size, color, style, ...props }) => <Ionicons name="home" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const User = ({ size, color, style, ...props }) => <Ionicons name="person" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const Info = ({ size, color, style, ...props }) => <Ionicons name="information-circle" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const Notification = ({ size, color, style, ...props }) => <Ionicons name="notifications" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const Exit = ({ size, color, style, ...props }) => <Ionicons name="exit" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />

export default {
  Menu,
  Back,
  Store,
  User,
  Info,
  Notification,
  Exit
}

// export const Down = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M19.175 9.45c-.6-.6-1.5-.6-2.1 0l-5.3 5.3-5.2-5.3c-.6-.5-1.6-.5-2.2 0-.5.6-.5 1.6 0 2.2l6.3 6.3c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l6.3-6.3c.6-.6.6-1.6 0-2.2z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Up = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M4.825 14.55C5.425 15.15 6.325 15.15 6.925 14.55L12.225 9.25L17.425 14.55C18.025 15.05 19.025 15.05 19.625 14.55C20.125 13.95 20.125 12.95 19.625 12.35L13.325 6.05C13.025 5.75 12.625 5.65 12.225 5.65C11.825 5.65 11.425 5.75 11.125 6.05L4.825 12.35C4.225 12.95 4.225 13.95 4.825 14.55Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };


// export const Check = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M21.42 5.363c-.6-.5-1.4-.5-1.9.1l-10 11.1-5.3-4.3c-.6-.4-1.4-.4-1.9.2-.5.6-.4 1.4.2 1.9l6.2 5.2s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1H10.02c.1 0 .1 0 .2-.1 0 0 .1 0 .1-.1.1 0 .1-.1.1-.1l.1-.1.1-.1 10.9-12.1c.5-.5.4-1.4-.1-1.9z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Add = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M19.7 10.4h-6.5V3.6c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v6.8H3.6c-.9 0-1.6.7-1.6 1.5s.7 1.6 1.6 1.6H10v6.2c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-6.2h6.5c.9 0 1.6-.7 1.6-1.6 0-.9-.8-1.5-1.6-1.5z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Delete = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M16.4 11H7.5c-.8 0-1.5.7-1.5 1.5S6.7 14 7.5 14h8.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Cart = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M8.2 17c-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7.9 0 1.8-.7 1.8-1.7S9.2 17 8.2 17zM3 3.9c0 .5.4.9.9.9h.9l3.1 6.6-1.2 2.1c-.5.8-.2 1.9.7 2.4.3.1.6.2.8.2h9.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H8.2l1-1.7h6.5c.6 0 1.2-.3 1.5-.9L20.3 6c.2-.4.1-.9-.3-1.2-.1-.1-.3-.1-.5-.1H6.7l-.6-1.2C6 3.2 5.6 3 5.3 3H3.9c-.5 0-.9.4-.9.9zM17 17c-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7.9 0 1.7-.8 1.7-1.7 0-.9-.7-1.7-1.7-1.7z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Pin = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M16 6.902C16 4.712 14.244 3 12 3 9.756 3 8 4.713 8 6.902c0 1.712 1.17 3.235 2.83 3.71v9.612c0 .095.097.285.194.285l.586.381c.195.19.585.095.78 0l.683-.38c.098-.096.195-.19.195-.286v-9.611C14.83 10.137 16 8.614 16 6.902z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Location = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M19.85 4.15a.555.555 0 00-.63-.09L4.36 10.453c-.27.09-.36.36-.36.63s.18.45.45.54l6.125 1.801 1.8 6.125c.09.27.27.45.541.45.27 0 .45-.18.54-.36l6.485-14.86c.09-.18.09-.45-.09-.63z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Marker = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M11.75 3C7.98 3 5 6.245 5 10.191c0 4.911 6.049 10.349 6.312 10.612.263.263.701.263.876 0 .263-.263 6.312-5.7 6.312-10.612C18.412 6.245 15.432 3 11.75 3z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Battery = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M14.98 5.333h-.384v-.089c0-.71-.577-1.244-1.346-1.244h-2.5c-.673 0-1.25.533-1.25 1.244v.09h-.48C7.961 5.333 7 6.221 7 7.2v10.933C7 19.2 7.962 20 9.02 20h5.96c1.155 0 2.02-.889 2.02-1.867V7.2c0-.978-.865-1.867-2.02-1.867zm.097 12.8c0 .09 0 .09-.096.09H9.019s-.096 0-.096-.09V7.2c0-.089.096-.089.096-.089h5.962a.09.09 0 01.096.089v10.933z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Phone = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M19.87 16.675l-2.6-2.7c-.5-.5-1.4-.5-2 0l-1.3 1.4c-.1 0-.2-.1-.3-.1-.9-.5-2-1.1-3.2-2.3-1.3-1.3-1.9-2.5-2.4-3.4-.1 0-.1-.1-.2-.2l.9-.9.5-.5c.6-.6.6-1.4 0-2l-2.6-2.6c-.5-.5-1.4-.5-2 0l-.8.8c-.2.3-.4.7-.6 1.1-.1.4-.2.7-.2 1.1-.4 2.9.9 5.6 4.6 9.3 5 5 9.1 4.6 9.2 4.6.4 0 .7-.1 1.1-.3.4-.2.8-.4 1.1-.6l.8-.7c.6-.6.6-1.5 0-2z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Wrench = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M20 7.71641C20 6.90312 19.6324 6.08984 19.0811 5.45729C18.9892 5.36693 18.8973 5.27656 18.7135 5.27656C18.6216 5.27656 18.4378 5.36693 18.4378 5.45729L17.3351 7.26458C17.0595 7.62604 16.6 7.80677 16.1405 7.62604C15.9568 7.53568 15.8649 7.44531 15.773 7.35495C15.4973 7.08385 15.4054 6.63203 15.5892 6.27057L16.5081 4.64401C16.6 4.55365 16.6 4.37292 16.5081 4.28255C16.6 4.10182 16.4162 4.01146 16.3243 4.01146C15.2216 3.92109 14.2108 4.37292 13.4757 5.09583C12.6486 5.81875 12.1892 6.81276 12.1892 7.89713C12.1892 8.07786 12.2811 8.34896 12.373 8.71042C12.4649 9.07187 12.373 9.5237 12.0973 9.79479L3.55135 18.1083C3.18378 18.4698 3 19.012 3 19.4638C3 20.2771 3.73514 21 4.56216 21C5.11351 21 5.57297 20.8193 6.03243 20.3674L14.3027 11.7828C14.5784 11.5117 14.9459 11.4214 15.3135 11.4214C16.6919 11.6924 17.9784 11.2406 18.8973 10.337C19.6324 9.61406 20 8.62005 20 7.71641ZM4.74595 20.006C4.37838 20.006 4.1027 19.7349 4.1027 19.3734C4.1027 19.012 4.37838 18.7409 4.74595 18.7409C5.11351 18.7409 5.38919 19.012 5.38919 19.3734C5.48108 19.6445 5.11351 20.006 4.74595 20.006Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Bolt = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M8.86577 20.4126L10.9597 14.1985H5.40268C5.16107 14.1985 5 13.9499 5 13.7014C5 13.6185 5 13.5357 5.08054 13.4528C6.69128 11.3815 8.38255 9.31012 9.99329 7.23877C10.7987 6.24453 11.604 5.16743 12.4094 4.17318C12.651 4.00747 12.8926 3.92462 13.0537 4.09032C13.2148 4.17318 13.2148 4.42174 13.2148 4.58745L11.0403 10.8843H16.5973C16.8389 10.8843 17 11.0501 17 11.2986C17 11.3815 17 11.4643 16.9195 11.5472C15.3087 13.6185 13.698 15.6899 12.0067 17.7612C11.2013 18.7555 10.396 19.7497 9.51007 20.8268C9.34899 20.9925 9.10738 21.0754 8.94631 20.9097C8.86577 20.8268 8.78524 20.5783 8.86577 20.4126Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Park = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M12.6769 5.18182C13.4992 5.18182 14.222 5.35689 14.845 5.70704C15.468 6.05719 15.9477 6.55648 16.2841 7.2049C16.633 7.84036 16.8075 8.57308 16.8075 9.40306C16.8075 10.2201 16.6268 10.9398 16.2655 11.5623C15.9166 12.1848 15.4181 12.6711 14.7702 13.0213C14.1347 13.3584 13.3996 13.527 12.5647 13.527H9.91065C9.84835 13.527 9.8172 13.5595 9.8172 13.6243V18.5847C9.8172 18.6496 9.79227 18.7079 9.74243 18.7598C9.70505 18.7987 9.65521 18.8182 9.59291 18.8182H7.40611C7.3438 18.8182 7.28773 18.7987 7.23789 18.7598C7.20051 18.7079 7.18182 18.6496 7.18182 18.5847V5.41525C7.18182 5.35041 7.20051 5.29854 7.23789 5.25963C7.28773 5.20776 7.3438 5.18182 7.40611 5.18182H12.6769ZM12.2844 11.3289C12.8575 11.3289 13.3186 11.1603 13.6675 10.8231C14.0164 10.473 14.1908 10.0191 14.1908 9.46142C14.1908 8.8908 14.0164 8.43042 13.6675 8.08027C13.3186 7.73013 12.8575 7.55505 12.2844 7.55505H9.91065C9.84835 7.55505 9.8172 7.58747 9.8172 7.65232V11.2316C9.8172 11.2965 9.84835 11.3289 9.91065 11.3289H12.2844Z"
//         fill={(style && style.color) || textColor}
//       />
//       <Path 
//         fillRule="evenodd" 
//         clipRule="evenodd" 
//         d="M14.8566 13.1812L14.8554 13.1819C14.1898 13.5351 13.4245 13.7089 12.5647 13.7089H9.99901V18.5847C9.99901 18.7019 9.95204 18.8041 9.87354 18.8858C9.7965 18.966 9.69635 19 9.59291 19H7.40611C7.30261 19 7.2073 18.9666 7.12601 18.9031L7.10556 18.8872L7.09038 18.8661C7.03036 18.7828 7 18.6872 7 18.5847V5.41525C7 5.31352 7.03049 5.21306 7.10678 5.13366C7.18513 5.05212 7.28656 5 7.40611 5H12.6769C13.5257 5 14.28 5.18093 14.9341 5.54854C15.5881 5.9161 16.0922 6.44108 16.4446 7.11928C16.8095 7.78478 16.9893 8.54777 16.9893 9.40306C16.9893 10.2472 16.8025 10.9989 16.4234 11.6524C16.0571 12.3054 15.5334 12.8155 14.8566 13.1812ZM16.2655 11.5623C16.6268 10.9398 16.8075 10.2201 16.8075 9.40306C16.8075 8.57308 16.633 7.84036 16.2841 7.2049C15.9477 6.55648 15.468 6.05719 14.845 5.70704C14.222 5.35689 13.4992 5.18182 12.6769 5.18182H7.40611C7.3438 5.18182 7.28773 5.20776 7.23789 5.25963C7.20051 5.29854 7.18182 5.35041 7.18182 5.41525V18.5847C7.18182 18.6496 7.20051 18.7079 7.23789 18.7598C7.28773 18.7987 7.3438 18.8182 7.40611 18.8182H9.59291C9.65521 18.8182 9.70505 18.7987 9.74243 18.7598C9.79227 18.7079 9.8172 18.6496 9.8172 18.5847V13.6243C9.8172 13.5595 9.84835 13.527 9.91065 13.527H12.5647C13.3996 13.527 14.1347 13.3584 14.7702 13.0213C15.4181 12.6711 15.9166 12.1848 16.2655 11.5623ZM13.5399 10.6936C13.2311 10.9913 12.8188 11.1471 12.2844 11.1471H9.99901V7.73687H12.2844C12.8176 7.73687 13.2294 7.89819 13.5387 8.20861C13.8483 8.51938 14.009 8.93087 14.009 9.46142C14.009 9.977 13.8496 10.3821 13.5399 10.6936ZM13.6675 10.8231C13.3186 11.1603 12.8575 11.3289 12.2844 11.3289H9.91065C9.84835 11.3289 9.8172 11.2965 9.8172 11.2316V7.65232C9.8172 7.58747 9.84835 7.55505 9.91065 7.55505H12.2844C12.8575 7.55505 13.3186 7.73013 13.6675 8.08027C14.0164 8.43042 14.1908 8.8908 14.1908 9.46142C14.1908 10.0191 14.0164 10.473 13.6675 10.8231Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };


// export const Parking = ({ style, size, background, ...props }) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);
//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 24 24" fill="none" {...props}>
//       <Path
//         d="M12.6 6.784C13.304 6.784 13.9227 6.928 14.456 7.216C14.9893 7.504 15.4 7.91467 15.688 8.448C15.9867 8.97067 16.136 9.57333 16.136 10.256C16.136 10.928 15.9813 11.52 15.672 12.032C15.3733 12.544 14.9467 12.944 14.392 13.232C13.848 13.5093 13.2187 13.648 12.504 13.648H10.232C10.1787 13.648 10.152 13.6747 10.152 13.728V17.808C10.152 17.8613 10.1307 17.9093 10.088 17.952C10.056 17.984 10.0133 18 9.96 18H8.088C8.03466 18 7.98666 17.984 7.944 17.952C7.912 17.9093 7.896 17.8613 7.896 17.808V6.976C7.896 6.92267 7.912 6.88 7.944 6.848C7.98666 6.80533 8.03466 6.784 8.088 6.784H12.6ZM12.264 11.84C12.7547 11.84 13.1493 11.7013 13.448 11.424C13.7467 11.136 13.896 10.7627 13.896 10.304C13.896 9.83467 13.7467 9.456 13.448 9.168C13.1493 8.88 12.7547 8.736 12.264 8.736H10.232C10.1787 8.736 10.152 8.76267 10.152 8.816V11.76C10.152 11.8133 10.1787 11.84 10.232 11.84H12.264Z"
//         fill={textColor}
//       />
//     </Svg>
//   );
// };

// export const Boost = ({ style, size, background, ...props }) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 25 24" fill="none" {...props}>
//       <Path
//         d="M9.95666 16.5416C12.3389 18.4052 15.7808 17.9849 17.6445 15.6027C19.5081 13.2205 19.0878 9.77852 16.7056 7.91487C15.4959 6.96852 14.0149 6.61099 12.6027 6.80038C12.0827 6.87013 11.6046 6.50511 11.5348 5.98509C11.4651 5.46508 11.8301 4.98699 12.3501 4.91724C14.2485 4.66264 16.2473 5.14401 17.8763 6.4184C21.085 8.92863 21.6512 13.5647 19.1409 16.7734C16.6307 19.9821 11.9946 20.5483 8.78593 18.038C8.3727 17.7147 8.29978 17.1177 8.62306 16.7044C8.94635 16.2912 9.54342 16.2183 9.95666 16.5416Z"
//         fill={textColor}
//       />
//       <Path
//         d="M13.75 12.3336C13.75 12.8858 13.3023 13.3336 12.75 13.3336C12.1977 13.3336 11.75 12.8858 11.75 12.3336C11.75 11.7813 12.1977 11.3336 12.75 11.3336C13.3023 11.3336 13.75 11.7813 13.75 12.3336Z"
//         fill={textColor} 
//       />
//       <Path
//         fill={textColor} 
//         d="M4.75 13.5835C4.75 13.1693 5.08579 12.8335 5.5 12.8335L8 12.8335C8.41421 12.8335 8.75 13.1693 8.75 13.5835C8.75 13.9977 8.41421 14.3335 8 14.3335L5.5 14.3335C5.08579 14.3335 4.75 13.9977 4.75 13.5835Z"
//       />
//       <Path
//         fill={textColor} 
//         d="M3.75 10.5836C3.75 10.1693 4.08579 9.83356 4.5 9.83356L9 9.83356C9.41421 9.83356 9.75 10.1693 9.75 10.5836C9.75 10.9978 9.41421 11.3336 9 11.3336L4.5 11.3336C4.08579 11.3336 3.75 10.9978 3.75 10.5836Z"
//       />
//       <Path
//         fill={textColor} 
//         d="M2 7.58356C2 7.16934 2.33579 6.83356 2.75 6.83356L10 6.83356C10.4142 6.83356 10.75 7.16934 10.75 7.58356C10.75 7.99777 10.4142 8.33356 10 8.33356L2.75 8.33356C2.33579 8.33356 2 7.99777 2 7.58356Z"
//       />
//     </Svg>
//   );
// };

// export const Assist = ({ style, size, background, ...props }) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 25 24" fill="none" {...props}>
//       <Path
//         d="M18.1524 5.28887C18.5242 5.18925 18.8644 5.52946 18.7648 5.90124L17.9041 9.1134C17.8045 9.48519 17.3398 9.60971 17.0676 9.33755L14.7161 6.98608C14.444 6.71392 14.5685 6.24919 14.9403 6.14957L18.1524 5.28887Z"
//         fill={textColor}
//       />
//       <Path
//         d="M17.4312 6.3636C17.7826 6.71508 17.7826 7.28492 17.4312 7.6364L12.4312 12.6364C12.0797 12.9879 11.5098 12.9879 11.1584 12.6364C10.8069 12.2849 10.8069 11.7151 11.1584 11.3636L16.1584 6.3636C16.5098 6.01213 17.0797 6.01213 17.4312 6.3636Z"
//         fill={textColor} 
//       />
//       <Path
//         fill={textColor} 
//         d="M10.5909 6.70905C7.60929 7.21727 5.60423 10.0463 6.11244 13.0279C6.62065 16.0095 9.44969 18.0145 12.4313 17.5063C13.9453 17.2482 15.2063 16.3932 16.0165 15.2211C16.3148 14.7895 16.9065 14.6814 17.3381 14.9798C17.7697 15.2781 17.8778 15.8698 17.5794 16.3014C16.4904 17.8771 14.7894 19.0318 12.7505 19.3793C8.73452 20.0638 4.92399 17.3631 4.23945 13.3471C3.55492 9.33113 6.25561 5.5206 10.2716 4.83607C10.7888 4.74791 11.2796 5.09572 11.3677 5.61293C11.4559 6.13014 11.1081 6.62089 10.5909 6.70905Z"
//       />
//     </Svg>
//   );
// };

// export const Lock = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M17.149 10.307h-.304V8.882a4.855 4.855 0 00-4.988-4.881 4.855 4.855 0 00-4.702 4.881v1.425h-.304c-.468 0-.851.483-.851 1.08v7.14c0 .596.383 1.084.851 1.084H17.15c.469 0 .851-.488.851-1.085v-7.139c0-.596-.382-1.08-.851-1.08zm-4.187 4.636v2.159a.459.459 0 01-.456.456h-1.014a.456.456 0 01-.454-.454v-2.16a1.308 1.308 0 01.82-2.225 4.51 4.51 0 01.285 0 1.308 1.308 0 01.82 2.224zm1.862-4.636h-5.68V8.882a2.84 2.84 0 115.68 0v1.425z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Unlock = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M17.148 10.305H9.146V8.883a2.838 2.838 0 015.57-.81.993.993 0 00.964.713 1.008 1.008 0 00.977-1.273A4.856 4.856 0 0012.143 4h-.286a4.856 4.856 0 00-4.702 4.883v1.422h-.302c-.47 0-.853.486-.853 1.079v7.141c0 .596.383 1.08.853 1.08h10.295c.469 0 .852-.489.852-1.08v-7.138c0-.597-.383-1.082-.852-1.082zm-4.185 4.637v2.159a.458.458 0 01-.458.456H11.49a.453.453 0 01-.453-.454v-2.158a1.305 1.305 0 01.81-2.223h.285a1.308 1.308 0 01.81 2.223l.021-.003z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Bluetooth = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M17.6402 15.4618L12.5621 12L17.6402 8.53825C18.1199 8.21121 18.1199 7.60842 17.6402 7.28138L11.6402 3.19117C10.9889 2.74715 10 3.12604 10 3.81962V10.0251L6.70713 7.33137C6.31659 7.01189 5.68345 7.01189 5.29291 7.33137C4.90236 7.65085 4.90236 8.16878 5.29291 8.48826L9.58576 12L5.29291 15.5118C4.90236 15.8312 4.90236 16.3492 5.29291 16.6686C5.68345 16.9881 6.31659 16.9881 6.70713 16.6686L10 13.9749V20.1804C10 20.874 10.9889 21.2528 11.6402 20.8088L17.6402 16.7186C18.1199 16.3916 18.1199 15.7888 17.6402 15.4618ZM12 5.56613L15.4379 7.90976L12 10.2534V5.56613ZM12 18.4338V13.7465L15.4379 16.0902L12 18.4338Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Sun = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M14.836 9.164A4.035 4.035 0 0012 7.979c-1.1 0-2.116.444-2.836 1.185A4.035 4.035 0 007.979 12c0 1.1.465 2.116 1.185 2.836A4.035 4.035 0 0012 16.021c1.1 0 2.116-.444 2.836-1.185A4.035 4.035 0 0016.021 12c0-1.1-.444-2.116-1.185-2.836zM12 6.73a.56.56 0 00.55-.55V4.55A.56.56 0 0012 4a.56.56 0 00-.55.55v1.63c0 .296.254.55.55.55zM16.508 8.275l1.164-1.164a.537.537 0 000-.762.537.537 0 00-.762 0l-1.164 1.164a.537.537 0 000 .762c.19.212.53.212.762 0zM19.45 11.45h-1.63a.56.56 0 00-.55.55c0 .296.254.55.55.55h1.63A.56.56 0 0020 12a.56.56 0 00-.55-.55zM16.487 15.725a.536.536 0 00-.762 0 .536.536 0 000 .762l1.164 1.164c.212.211.55.211.762 0a.537.537 0 000-.762l-1.164-1.164zM12 17.27a.56.56 0 00-.55.55v1.63c0 .296.254.55.55.55a.56.56 0 00.55-.55v-1.63a.56.56 0 00-.55-.55zM7.492 15.725l-1.164 1.164a.537.537 0 000 .762c.212.211.55.211.762 0l1.164-1.164a.537.537 0 000-.762c-.19-.212-.53-.212-.762 0zM6.73 12a.56.56 0 00-.55-.55H4.55A.56.56 0 004 12c0 .296.254.55.55.55h1.63a.56.56 0 00.55-.55zM7.492 8.275c.212.212.55.212.762 0a.537.537 0 000-.762L7.09 6.35a.537.537 0 00-.762 0 .537.537 0 000 .762l1.164 1.164z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Cloud = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M14.673 7.5c.271-.019.504-.232.504-.503V5.504A.513.513 0 0014.673 5a.513.513 0 00-.504.504v1.493c0 .271.232.504.504.504zM18.782 8.896l1.066-1.066a.491.491 0 000-.698.491.491 0 00-.697 0l-1.067 1.066a.491.491 0 000 .698.491.491 0 00.698 0zM21.496 11.823h-1.493a.513.513 0 00-.504.504c0 .272.233.504.504.504h1.493a.513.513 0 00.504-.504.5.5 0 00-.504-.504zM18.782 15.739a.492.492 0 00-.698 0 .492.492 0 000 .698l1.067 1.066a.491.491 0 00.697 0 .491.491 0 000-.698l-1.066-1.066zM10.563 8.896a.491.491 0 00.698 0 .491.491 0 000-.698l-1.066-1.066a.491.491 0 00-.698 0 .491.491 0 000 .698l1.066 1.066zM13.723 12.986c-.422 0-.848.097-1.217.272a2.81 2.81 0 00-.993.775.438.438 0 01-.664.039.492.492 0 01-.039-.698 3.826 3.826 0 011.328-1.027c.092-.039.204-.097.296-.136a4.176 4.176 0 00-1.255-1.493 3.832 3.832 0 00-2.288-.756c-.993 0-1.9.388-2.597 1.008a4.287 4.287 0 00-1.348 2.56.446.446 0 01-.222.348.403.403 0 01-.257.078c-.684 0-1.309.29-1.75.775A2.684 2.684 0 002 16.573c0 .717.276 1.376.737 1.841.44.465 1.07.775 1.75.775h9.275c.794.059 1.53-.29 2.064-.872a3.194 3.194 0 00.867-2.21c0-.872-.33-1.647-.867-2.21a2.891 2.891 0 00-2.103-.91z"
//         fill={(style && style.color) || textColor}
//       />
//       <Path
//         d="M18.336 12.327a3.615 3.615 0 00-1.085-2.597 3.695 3.695 0 00-2.598-1.086c-.678 0-1.337.194-1.9.524a3.908 3.908 0 00-1.066.969c.272.213.504.446.718.698.31.349.562.756.775 1.202.116-.02.252-.02.368-.02a4.1 4.1 0 012.908 1.202c.155.155.31.349.446.523.213.291.388.62.504.97.29-.272.504-.601.64-.95.193-.446.29-.95.29-1.435z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Rain = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M7.543 16.17a.12.12 0 00-.065-.066c-.08-.05-.212-.03-.257.065-.066.111-.146.227-.242.358-.419.615-1.033 1.522-1.033 2.052 0 .388.16.746.418 1.003.257.257.615.418 1.003.418.388 0 .746-.161 1.003-.403l.015-.015c.257-.257.418-.615.418-1.003 0-.535-.614-1.442-1.033-2.052-.08-.13-.166-.247-.227-.358zM12.382 16.17a.12.12 0 00-.066-.066c-.08-.05-.211-.03-.257.065-.065.111-.146.227-.241.358-.419.615-1.034 1.522-1.034 2.052 0 .388.162.746.419 1.003.257.257.615.418 1.003.418.388 0 .746-.161 1.003-.403l.015-.015c.257-.257.418-.615.418-1.003 0-.535-.615-1.442-1.033-2.052-.076-.13-.166-.247-.227-.358zM17.226 16.17a.12.12 0 00-.066-.066c-.08-.05-.211-.03-.257.065-.065.111-.146.227-.242.358-.418.615-1.033 1.522-1.033 2.052 0 .388.161.746.418 1.003.257.257.615.418 1.003.418.389 0 .746-.161 1.003-.403l.015-.015c.258-.257.419-.615.419-1.003 0-.535-.615-1.442-1.033-2.052-.081-.13-.172-.247-.227-.358zM19.464 9.153a3.276 3.276 0 00-2.319-.947c-.463 0-.927.1-1.35.282a3.146 3.146 0 00-1.11.806.6.6 0 01-.826.06.599.599 0 01-.06-.826A4.442 4.442 0 0115.29 7.42c.101-.04.182-.08.283-.12a4.653 4.653 0 00-1.351-1.513A4.394 4.394 0 0011.702 5a4.419 4.419 0 00-2.883 1.069A4.363 4.363 0 007.327 8.77a.558.558 0 01-.262.403.61.61 0 01-.323.101 2.73 2.73 0 00-1.936.807 2.73 2.73 0 000 3.871c.525.483 1.19.786 1.956.786h10.403c.908 0 1.714-.363 2.319-.948a3.276 3.276 0 00.947-2.318c0-.907-.363-1.714-.967-2.319z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Storm = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M19.973 9.278a3.501 3.501 0 00-2.445-.998c-.489 0-.978.102-1.406.306a3.442 3.442 0 00-1.161.855.5.5 0 01-.734.041.5.5 0 01-.04-.733 4.488 4.488 0 011.507-1.12c.123-.062.245-.103.367-.143a4.415 4.415 0 00-1.467-1.65A4.596 4.596 0 0011.946 5c-1.141 0-2.2.407-3.016 1.12a4.562 4.562 0 00-1.548 2.812.522.522 0 01-.244.367.578.578 0 01-.265.081c-.795 0-1.528.326-2.038.836A2.847 2.847 0 004 12.253c0 .794.326 1.528.835 2.037.51.51 1.243.836 2.038.836h2.872c-.02-.163.02-.347.082-.51l1.589-3.26a.96.96 0 01.876-.57h1.854a.9.9 0 01.489.143.962.962 0 01.346 1.304l-.468.774c.142.04.285.102.407.204a.961.961 0 01.082 1.344l-.51.57h3.056c.958 0 1.814-.386 2.425-.998a3.452 3.452 0 00.998-2.424c0-.937-.387-1.813-.998-2.425z"
//         fill={(style && style.color) || textColor}
//       />
//       <Path
//         d="M14.35 13.863a.156.156 0 00-.102-.041h-1.161l1.16-1.976c.042-.062.021-.164-.06-.204-.02-.02-.041-.02-.082-.02h-1.813V11.6a.153.153 0 00-.143.102l-1.589 3.3c-.04.082 0 .163.061.204.02 0 .041.02.061.02h.958l-1.06 2.73c-.02.082 0 .163.082.184.061.02.122 0 .163-.04l3.545-4.035c.061-.06.04-.163-.02-.204zM7.77 16.129a.12.12 0 00-.067-.066c-.082-.051-.214-.03-.26.066a4.56 4.56 0 01-.244.362c-.423.621-1.045 1.538-1.045 2.073 0 .392.163.753.423 1.013.26.26.622.423 1.014.423s.754-.163 1.013-.407l.016-.016c.26-.26.422-.621.422-1.013 0-.54-.621-1.457-1.044-2.073-.081-.133-.168-.25-.229-.362zM17.294 16.129c-.016-.015-.03-.05-.067-.066-.081-.051-.213-.03-.26.066-.066.112-.147.23-.244.362-.422.621-1.044 1.538-1.044 2.073a1.5 1.5 0 00.443 1.013c.26.26.622.423 1.014.423s.754-.163 1.013-.423c.26-.26.423-.621.423-1.013 0-.54-.621-1.457-1.044-2.073-.087-.133-.168-.25-.234-.362z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Network = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M19.036 3a1.966 1.966 0 00-1.726 2.9l-3.216 3.216a2.6 2.6 0 00-3.206 0l-2.51-2.51c.115-.195.186-.418.186-.66a1.31 1.31 0 00-1.31-1.31 1.31 1.31 0 00-1.309 1.31c0 .721.588 1.309 1.31 1.309.242 0 .466-.07.66-.186l2.51 2.51a2.602 2.602 0 000 3.205L6.281 16.93a1.954 1.954 0 00-1.317-.51c-1.083 0-1.964.88-1.964 1.963 0 1.083.88 1.963 1.964 1.963a1.966 1.966 0 001.726-2.9l4.198-4.198c.362.282.799.47 1.276.53v3.325a1.965 1.965 0 00-1.636 1.934c0 1.083.88 1.964 1.963 1.964 1.083 0 1.964-.88 1.964-1.964 0-.97-.71-1.777-1.636-1.934v-3.325c.477-.06.913-.248 1.275-.53l2.51 2.51a1.29 1.29 0 00-.186.661 1.31 1.31 0 002.618 0 1.31 1.31 0 00-1.309-1.309c-.242 0-.466.07-.66.186l-2.51-2.51a2.603 2.603 0 000-3.206l3.163-3.163c.348.317.81.511 1.316.511 1.083 0 1.964-.88 1.964-1.963C21 3.88 20.12 3 19.036 3z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Chat = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M16.8519 4H6.04321C4.3642 4 3 5.44444 3 7.22222V13.3333C3 15.1111 4.3642 16.5556 6.04321 16.5556H6.46296V16.6667V19.2222C6.46296 19.5556 6.67284 19.8889 6.98765 20C7.09259 20 7.19753 20 7.19753 20C7.40741 20 7.61728 19.8889 7.82716 19.6667L10.1358 16.5556H16.9568C18.6358 16.5556 20 15.1111 20 13.3333V7.22222C19.8951 5.44444 18.5309 4 16.8519 4ZM13.5988 12.6667H9.40123C8.98148 12.6667 8.66667 12.3333 8.66667 11.8889C8.66667 11.4444 8.98148 11.1111 9.40123 11.1111H13.5988C14.0185 11.1111 14.3333 11.4444 14.3333 11.8889C14.3333 12.3333 14.0185 12.6667 13.5988 12.6667ZM15.0679 9.33333H7.9321C7.51235 9.33333 7.19753 9 7.19753 8.66667C7.19753 8.22222 7.51235 7.88889 7.9321 7.88889H15.0679C15.4877 7.88889 15.8025 8.22222 15.8025 8.66667C15.8025 9 15.3827 9.33333 15.0679 9.33333Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Mail = ({ style, background, ...props }) => {
//   const textColor = useTextColor(background);
//   return (
//     <Svg viewBox="0 0 24 24" style={[defaultStyle, style]} {...props}>
//       <Path
//         d="M4.16071 5C3.58036 5 3 5.58036 3 6.16071V6.27679L12.1696 11.9643L21.3393 6.39286V6.16071C21.3393 5.46429 20.7589 5 20.1786 5H4.16071Z"
//         fill={(style && style.color) || textColor}
//       />
//       <Path
//         d="M11.7054 13.8214L3 8.48214V16.8393C3 17.5357 3.58036 18 4.16071 18H20.0625C20.7589 18 21.2232 17.4196 21.2232 16.8393V8.48214L12.6339 13.8214C12.5179 13.9375 12.4018 13.9375 12.1696 13.9375C12.0536 13.9375 11.8214 13.9375 11.7054 13.8214Z"
//         fill={(style && style.color) || textColor}
//       />
//     </Svg>
//   );
// };

// export const Apple = ({ background, size }) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 16 21" fill="none">
//       <Path
//         d="M.826 8.075C-.83 11.073.223 15.621 2.053 18.38c.914 1.378 1.839 2.616 3.106 2.616l.072-.001c.595-.025 1.026-.216 1.441-.401.467-.208.95-.422 1.708-.422.72 0 1.18.207 1.625.408.438.198.89.403 1.557.39 1.427-.028 2.303-1.364 3.076-2.542a11.488 11.488 0 001.348-2.88l.006-.019a.17.17 0 00-.097-.21c-.252-.108-2.456-1.128-2.48-3.91-.02-2.26 1.655-3.456 1.99-3.673l.016-.01a.173.173 0 00.046-.235c-1.157-1.766-2.929-2.032-3.643-2.064a3.08 3.08 0 00-.317-.017c-.838 0-1.641.33-2.286.596-.446.183-.83.342-1.095.342-.298 0-.685-.16-1.133-.346-.599-.248-1.278-.53-1.996-.53l-.051.001c-1.671.026-3.25 1.024-4.12 2.603z"
//         fill={textColor}
//       />
//       <Path
//         d="M11.826.565c-1.012.043-2.226.693-2.951 1.58-.617.745-1.22 1.988-1.06 3.24.01.079.07.14.146.146.068.005.138.008.208.008.989 0 2.056-.571 2.785-1.49.767-.972 1.155-2.218 1.038-3.335a.164.164 0 00-.166-.149z"
//         fill={textColor}
//       />
//     </Svg>
//   );
// };

// export const Move = ({background, size, ...props}) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 24 24" fill="none" {...props}>
//       <Path
//         fill-rule="evenodd"
//         fill={textColor} 
//         clip-rule="evenodd" 
//         d="M10.393 7.05703C7.52708 8.02386 5.98759 11.1309 6.95442 13.9968C7.92125 16.8627 11.0283 18.4022 13.8942 17.4353C15.3494 16.9444 16.4618 15.9032 17.0793 14.6192C17.6779 13.3744 17.8088 11.9067 17.3327 10.4956C17.165 9.99844 17.4321 9.45947 17.9292 9.29175C18.4264 9.12404 18.9653 9.39109 19.133 9.88823C19.774 11.7882 19.5965 13.7687 18.7916 15.4426C17.9615 17.1688 16.4613 18.5745 14.5015 19.2357C10.6413 20.5379 6.45637 18.4643 5.15411 14.6041C3.85185 10.744 5.92545 6.55898 9.78563 5.25672C10.9759 4.85518 12.1997 4.77449 13.3603 4.96946C13.8778 5.05639 14.2268 5.5463 14.1398 6.06372C14.0529 6.58114 13.563 6.93013 13.0456 6.84321C12.1861 6.69882 11.2794 6.75799 10.393 7.05703Z"
//       />
//       <Path
//         d="M13 12.43C13 12.9823 12.5523 13.43 12 13.43C11.4477 13.43 11 12.9823 11 12.43C11 11.8777 11.4477 11.43 12 11.43C12.5523 11.43 13 11.8777 13 12.43Z" 
//         fill={textColor} />
//       <Path
//         d="M16.6811 6.29104C16.9533 6.56314 16.8289 7.0279 16.4571 7.1276L13.7275 7.85961C13.3558 7.9593 13.0155 7.61917 13.115 7.24736L13.8459 4.51744C13.9454 4.14563 14.4101 4.02101 14.6824 4.29312L16.6811 6.29104Z"
//         fill={textColor}
//       />
//     </Svg>
//   );
// };

// export const Brake = ({background, size, ...props}) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 24 24" fill="none" {...props}>
//       <Path
//         d="M11.8462 16.6294C14.5329 16.6294 16.7109 14.4514 16.7109 11.7647C16.7109 9.078 14.5329 6.9 11.8462 6.9C9.15945 6.9 6.98145 9.078 6.98145 11.7647C6.98145 14.4514 9.15945 16.6294 11.8462 16.6294ZM11.8462 18.5294C15.5822 18.5294 18.6109 15.5008 18.6109 11.7647C18.6109 8.02866 15.5822 5 11.8462 5C8.11011 5 5.08145 8.02866 5.08145 11.7647C5.08145 15.5008 8.11011 18.5294 11.8462 18.5294Z"
//         fill={textColor}
//         fillRule="evenodd"
//         clipRule="evenodd"
//       />
//       <Path
//         d="M5.57773 5.7538C5.88829 6.02789 5.91786 6.50184 5.64376 6.8124C4.45877 8.15506 3.75 9.88217 3.75 11.7647C3.75 13.6472 4.45877 15.3744 5.64376 16.717C5.91786 17.0276 5.88829 17.5015 5.57773 17.7756C5.26717 18.0497 4.79322 18.0201 4.51913 17.7096C3.10665 16.1092 2.25 14.034 2.25 11.7647C2.25 9.49545 3.10665 7.42024 4.51913 5.81983C4.79322 5.50927 5.26718 5.47971 5.57773 5.7538ZM18.1146 5.7538C18.4251 5.47971 18.8991 5.50927 19.1732 5.81983C20.5857 7.42024 21.4423 9.49545 21.4423 11.7647C21.4423 14.034 20.5857 16.1092 19.1732 17.7096C18.8991 18.0201 18.4251 18.0497 18.1146 17.7756C17.804 17.5015 17.7745 17.0276 18.0485 16.717C19.2335 15.3744 19.9423 13.6472 19.9423 11.7647C19.9423 9.88217 19.2335 8.15506 18.0485 6.8124C17.7745 6.50184 17.804 6.02789 18.1146 5.7538Z"
//         fill={textColor}
//         fillRule="evenodd"
//         clipRule="evenodd"
//       />
//     </Svg>
//   );
// };

// export const Eco = ({background, size, ...props}) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 24 24" fill="none" {...props}>
//       <Path 
//         fill-rule="evenodd" 
//         clip-rule="evenodd" 
//         d="M12.3076 4.20872C15.0267 3.74894 18.0112 4.13213 19.8676 4.55619L21 4.81486L20.3703 5.76821C19.3965 7.24262 18.7892 8.8458 18.192 10.4224C18.0828 10.7105 17.974 10.9977 17.8634 11.2831C17.176 13.0561 16.3871 14.8532 14.8587 15.9075C13.2269 17.0331 10.7042 16.8817 8.82623 15.7809C8.7076 15.7114 8.59114 15.6379 8.47717 15.5605C7.82001 16.7898 7.52801 17.9763 7.7835 19.0129C7.88939 19.4425 7.61802 19.8744 7.17739 19.9777C6.73676 20.0809 6.29372 19.8163 6.18783 19.3867C5.77257 17.702 6.34353 15.9674 7.23855 14.434C6.21597 13.1849 5.69872 11.4395 6.18387 9.26513C6.90412 6.0371 9.57832 4.67023 12.3076 4.20872ZM9.33919 14.1952C10.4983 12.5912 12.0269 11.1555 13.1466 10.2388C13.4937 9.95471 13.5388 9.4501 13.2473 9.11174C12.9559 8.77338 12.4383 8.72941 12.0913 9.01353C10.9732 9.92884 9.44308 11.3528 8.20621 12.9913C7.69175 12.14 7.47213 11.0185 7.78747 9.60522C8.30479 7.28667 10.1789 6.19254 12.5881 5.78517C14.5434 5.45455 16.7108 5.61324 18.3897 5.89631C17.6437 7.24324 17.115 8.64225 16.639 9.9019C16.5334 10.1813 16.4305 10.4538 16.3283 10.7174C15.6218 12.5397 14.9747 13.8675 13.9108 14.6014C12.9503 15.2639 11.1547 15.2789 9.67183 14.4097C9.55833 14.3432 9.44723 14.2717 9.33919 14.1952Z" 
//         fill={textColor}
//       />
//     </Svg>
//   )
// }

// export const Warning = ({background, size, ...props}) => {
//   const textColor = useTextColor(background);
//   const textSize = useTextSize(size);

//   return (
//     <Svg width={textSize} height={textSize} viewBox="0 0 24 24" fill="none" {...props}>
//       <Path
//         d="M19.6676 15.4269L14.0155 5.13637C13.1074 3.62222 10.8938 3.6202 9.98447 5.13637L4.33272 15.4269C3.4044 16.9741 4.52831 18.9333 6.34778 18.9333H17.652C19.47 18.9333 20.5959 16.9756 19.6676 15.4269ZM12 17.0763C11.4832 17.0763 11.0625 16.6596 11.0625 16.1477C11.0625 15.6359 11.4832 15.2192 12 15.2192C12.5168 15.2192 12.9375 15.6359 12.9375 16.1477C12.9375 16.6596 12.5168 17.0763 12 17.0763ZM12.9375 13.3621C12.9375 13.874 12.5168 14.2907 12 14.2907C11.4832 14.2907 11.0625 13.874 11.0625 13.3621V8.71948C11.0625 8.20761 11.4832 7.79095 12 7.79095C12.5168 7.79095 12.9375 8.20761 12.9375 8.71948V13.3621Z"
//         fill={textColor}
//       />
//     </Svg>
//   );
// };

// Down,
// Up,
// Check,
// Add,
// Delete,
// Back,
// Cart,
// Pin,
// Location,
// Marker,
// Battery,
// Phone,
// Wrench,
// Bolt,
// Parking,
// Lock,
// Unlock,
// Bluetooth,
// Sun,
// Cloud,
// Rain,
// Storm,
// Network,
// Chat,
// Mail,
// Boost,
// Apple,
// Move,
// Brake,
// Assist,
// Warning,
// Park,
// Eco