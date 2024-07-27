import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-[100vh] items-center justify-center backdrop-blur-md">
      <SignIn fallbackRedirectUrl={"/dashboard"} />
    </div>
  );
}
