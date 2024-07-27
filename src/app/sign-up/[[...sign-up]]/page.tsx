import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[100vh] backdrop-blur-md flex justify-center items-center">
      <SignUp />
    </div>
  );
}
