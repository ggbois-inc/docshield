import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppContext";
export default function Login() {
  const router = useRouter();
  const { account, connectWallet, error } = useContext(AppContext);
  useEffect(() => {
    if (account) {
      router.push("/");
    }
  }, [account]);
  return (
    <div className="flex bg-black min-h-screen items-center justify-center">
      <button onClick={connectWallet}>
        <img className="w-64 h-64" src="/metamask.svg" ></img>
      </button>
    </div>
  );
}
