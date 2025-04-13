import { User } from "@supabase/auth-helpers-nextjs";
import { Subscription, UserDetails } from "@/types";
import { createContext, useEffect, useState } from "react";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";

// This context is used to provide user authentication and subscription data to the application
type UserContextType = {
    acessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
};


export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName:string]: any;
};

export const UserContextProvider = (props: Props) => {
    const { 
        session, 
        isLoading: isLoadingUser, 
        supabaseClient: supabase,  
    } = useSessionContext();

    // Get the user from Supabase session context
    const user = useSupaUser();
    // Get the access token from Supabase session context
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);


    // Functions to fetch user details and subscription data from Supabase
    const getUserDetails = () => supabase.from("users").select('*').single();
    const getSubscription = () => supabase.from("subscriptions").select('*, prices(*, products(*))').in('status', ['trialing','active']).single();

    // useEffect to fetch user details and subscription data when the user is logged in
    useEffect(() => {
        if(user && !isLoadingData && !userDetails && !subscription) {
            setIsLoadingData(true);
            Promise.allSettled([getUserDetails(),getSubscription()]).then(
                (results) => {
                    const userDetailsPromise = results[0];
                    const subscriptionPromise = results[1];

                    if(userDetailsPromise.status === "fulfilled") {
                        setUserDetails(userDetailsPromise.value.data as UserDetails);
                    }
                    if(subscriptionPromise.status === "fulfilled") {
                        setSubscription(subscriptionPromise.value.data as Subscription);
                    }
                    setIsLoadingData(false);
                }
            );
        } else if(!user && !isLoadingUser && !isLoadingData) {
            setUserDetails(null);
            setSubscription(null);

        }
    }, [user, isLoadingUser]);
    
    // Return the context provider with the user data and loading state
    const value = {
        acessToken: accessToken,
        user: user,
        userDetails: userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscription: subscription
    };

    return <UserContext.Provider value={value} {...props} />;
};
