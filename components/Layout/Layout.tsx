import Header from "../Header/Header";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: "400" });

interface Props {
  children: JSX.Element,
}

export default function Layout(props: Props) {
  return (<div className={`${nunitoSans.className}`}>
    <Header />
    { props.children }
  </div>)
}