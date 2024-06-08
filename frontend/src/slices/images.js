import { apiSlice } from './api'

export const imagesSLice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        updateImage: builder.mutation({
            query:(data)=>({
                url:'api/upload',
                method:'POST',
                body:data
            })
        })
})
})

export const {useUpdateImageMutation} = imagesSLice