import { createContext, useContext } from 'react';

// Page data the server already fetched for the first render. Empty after client-side
// navigation, so pages fall back to fetching for themselves.
export const ServerData = createContext({});
export const useServerData = () => useContext(ServerData);
