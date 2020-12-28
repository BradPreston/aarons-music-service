export default function Button(btnStyle, btnText) {
  const cName = btnStyle;
  const text = btnText;
  return <button className={cName}>{text}</button>;
}
