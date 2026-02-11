import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return  <main className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-4">
        <SignIn />
      </div>
    </main>
}