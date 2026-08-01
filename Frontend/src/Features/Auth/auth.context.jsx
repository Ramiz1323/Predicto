import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { profile } from "./services/auth.api.js";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const refreshProfile = useCallback(async () => {
        setLoading(true);

        try {
            const data = await profile();
            setUser(data.user ?? null);
            return data.user ?? null;
        } catch (error) {
            setUser(null);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshProfile();
    }, [refreshProfile]);

    const value = useMemo(() => ({
            user,
            setUser,
            loading,
            setLoading,
            refreshProfile,
        }),
        [loading, refreshProfile, user],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;