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
const Animation = ({ size, color, style, ...props }) => <Ionicons name="easel" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />
const Exit = ({ size, color, style, ...props }) => <Ionicons name="exit" size={size || 30} color={color || colors.white} style={[defaultStyle, style]} { ...props } />

export default {
  Menu,
  Back,
  Store,
  User,
  Info,
  Notification,
  Animation,
  Exit
}
