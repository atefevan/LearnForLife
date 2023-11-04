interface Props {
  xs: number; /// Extra Small
  sm: number; /// Small
  md: number; /// Medium
  lg: number; /// Large
  rg?: number; /// Regular
  xl?: number; /// Extra Large
  btn?: number; /// Button
}
export const space: Props = {
  xs: 1.5,
  sm: 5,
  md: 10.5,
  lg: 15.5,
};
export const padding:Props = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
}
// export const margin:Props = {

// }

export const fontSizes: Props = {
  xs: 12,
  sm: 20,
  rg: 24,
  md: 34,
  lg: 48,
  xl: 60,
  btn: 12,
};

export const cardSize: Props = {
  xs: 12,
  sm: 20,
  rg: 24,
  md: 34,
  lg: 48,
  xl: 60,
  btn: 14,
};
