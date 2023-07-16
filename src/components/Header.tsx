import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
  const { data: sessionData } = useSession()

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name
          ? `Sem dinheiro, ${sessionData.user.name}?`
          : ''}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ''}
                  alt={sessionData?.user?.name ?? ''}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
