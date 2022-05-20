// import React, { useEffect } from 'react';
// import axios from "axios";
// import { useStateProvider } from "../../../../utility/stateProvider"
// import { reducerCases } from '../../../utility/constants';

// export default function getPlaylist() {
//     const [{ token, dispatch }] = useStateProvider();
//     useEffect(() => {
//         const getNewReleases = async () => {
//             const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/browse/new-releases`, {
//                 headers: {
//                     Authorization: "Bearer " + token,
//                     "Content-Type": "application/json",
//                 },
//             });
//             const { items } = response.data;
//             const newReleases = items.albums.items;
//             dispatch({ type: reducerCases.SET_NEW_RELEASES, newReleases })
//         };
//         const getFeaturedPlaylist = async () => {
//             const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/browse/featured-playlist`, {
//                 headers: {
//                     Authorization: "Bearer " + token,
//                     "Content-Type": "application/json",
//                 },
//             });
//             const { items } = response.data;
//             const featuredPlaylist = items.albums.items;
//             dispatch({ type: reducerCases.SET_FEATURED_PLAYLIST, featuredPlaylist })
//         };
//         const getCategories = async () => {
//             const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/browse/categories`, {
//                 headers: {
//                     Authorization: "Bearer " + token,
//                     "Content-Type": "application/json",
//                 },
//             });
//             const { items } = response.data;
//             const categories = items.albums.items;
//             dispatch({ type: reducerCases.SET_CATEGORIES, categories })
//         };
//         getNewReleases();
//         getFeaturedPlaylist();
//         getCategories();
//     }, [token, dispatch])
//     return (
//         <div></div>
//     )
// }
