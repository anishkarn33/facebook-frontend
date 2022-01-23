import { useRouter } from "next/router";
import Button from "../components/Button";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const {push} = useRouter()
  return (
    <div className="h-screen">
      <div className="relative">
        <Button className="absolute mt-2 mr-2 right-0" onClick={() => push("/login")}>
          Login
        </Button>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
