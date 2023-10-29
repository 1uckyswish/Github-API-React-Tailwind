import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            // headers: {
            //     Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
            // }
        })

        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }

    return <GithubContext.Provider value={{users, loading, fetchUsers}}>
        {children}
    </GithubContext.Provider>

};

export default GithubContext
