// 判断当前系统是否支持Symbol
const symbolSupport = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = symbolSupport
	? Symbol.for('react.element')
	: 0xeac7;
