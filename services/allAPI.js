import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

// upload video
export const uploadVideoAPI= async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get all uploaded videos
export const getAllUploadedVideoAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// get A video
export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
// delete video
export const deleteVideoAPI=async(id)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/allVideos/${id}`,{})
}
//add video history api
export const addVideoHistoryAPI=async(video)=>{
 return await commonAPI("POST",`${SERVER_URL}/history`,video)
}
// getHistory api
export const getHistoryAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
// delete History API
export const deleteHistoryAPI= async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}
// Add videos category  
export const addVideoCategoryAPI=async(category )=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}  
// get category
export const getVideoCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}
// delete category 
export const deleteCategoryAPI=async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{}) 
}
// update category
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}