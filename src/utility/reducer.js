import { reducerCases } from "./constants";

export const initialState = {
    token: null,
    newReleases: null,
    featuredPlaylist: null,
    categories: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state, token: action.token,
            }
        }
        case reducerCases.SET_NEW_RELEASES: {
            return {
                ...state, newReleases: action.newReleases,
            }
        }
        case reducerCases.SET_FEATURED_PLAYLIST: {
            return {
                ...state, featuredPlaylist: action.featuredPlaylist,
            }
        }
        case reducerCases.SET_CATEGORIES: {
            return {
                ...state, categories: action.categories,
            }
        }
        default:
            return state;
    }
}

export default reducer;