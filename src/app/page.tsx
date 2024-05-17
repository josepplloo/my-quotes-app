import Image from "next/image";
import { UserInfoFormContainer } from "@/components/form/UserInfoFormContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          My Tenders Apps
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <p>Made it with love with&nbsp;</p>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={90}
            height={34}
            priority
          />
        </div>
      </div>
      <UserInfoFormContainer />

      <div className="mb-32 grid text-center lg:mb-1 lg:mt-2 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          - Great copywriting
        </p>
      </div>
    </main>
  );
}
