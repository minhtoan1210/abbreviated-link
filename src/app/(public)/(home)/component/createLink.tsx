import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CreateLink() {
  return (
    <div className="create-link">
      <div className="container">
        <div className="create-title">Create short link</div>
        <div className="form-input">
          <Input
            className="create-input"
            placeholder="Paste long url and shorten it"
          />
          <Button className="btn-shorten">Shorten</Button>
        </div>
        <p className="text-center text-[12px] pb-[15px]">
          By using Cuttly URL Shortener, you accept the{" "}
          <Link href="/" className="text-[#1b5aff]">Terms of Service </Link> and{" "}
          <Link href="/" className="text-[#1b5aff]">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
