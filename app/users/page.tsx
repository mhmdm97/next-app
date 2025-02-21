'use client'

interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  // Add error handling for fetch
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: { revalidate: 10 }
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }

    const users: User[] = await res.json()

    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Users</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {new Date().toLocaleTimeString()}
        </p>
        <ul className="space-y-3">
          {users.map(user => (
            <li 
              key={user.id}
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 
                dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer
                border-l-4 border-transparent hover:border-blue-500 pl-4 py-2"
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    )
  } catch (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading users. Please try again later.</p>
      </div>
    )
  }
}

export default UsersPage