import { ReactNode, useEffect, useState } from "react";
import { globalContext } from "../../context";
import { User } from "../../context";



function GlobalProvider({ children }: { children: ReactNode }) {
    // Global state variables
    const [language, setLanguage] = useState<string>("en");
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

    const [isOpenChat, setIsOpenChat] = useState(false)

    // Authentication states
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<null | User>(null); // null when not logged in

    // Check if user is already logged in (stored in localStorage) when the app loads
    useEffect(() => {
        try {
            const userJson = localStorage.getItem('user');
            const storedUser: User | null = userJson ? JSON.parse(userJson) : null;;
            const storedAuthStatus = localStorage.getItem('isAuthenticated');

            if (storedUser && storedAuthStatus === 'true') {
                setUser(storedUser);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Error retrieving user from localStorage", error);
        }
    }, []);

    // Login function
    const login = (userData: User) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true'); // Set authentication status
    };
    // Logout function
    const logout = () => {
        setUser(null); // Reset user state
        setIsAuthenticated(false); // Update authentication status
        setIsOpenChat(false);
        localStorage.removeItem('user'); // Remove user data from local storage
        localStorage.removeItem('isAuthenticated'); // Remove authentication status
    };



    // data is generated with AI and dog name and images is not appreciated
    const [data, setData] = useState([])

    async function getData() {
        try {
            const response = await fetch("/data/data.json");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data)
        }
        catch (error) {
            console.log("Something error", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    // The object to be provided to the context consumers
    const globalContextValue = {
        language,
        setLanguage,
        isBurgerMenuOpen,
        setIsBurgerMenuOpen,
        data,
        setData,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        user,
        setUser,
        isOpenChat,
        setIsOpenChat
    };

    return (
        <globalContext.Provider value={globalContextValue}>
            {children}
        </globalContext.Provider>
    );
}

export default GlobalProvider;
