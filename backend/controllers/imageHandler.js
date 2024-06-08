import { uploadOnCloudinary } from "../utils/Cloudinary.js"

export const uploadHandler = async(req , res) => {
    // if(req.files){
    //     console.log('req.files exist')
    // }
    // const imageLocalPath = req.files?.image[0]?.path
    // try {
    //     if (!imageLocalPath) {
    //         res.status(400).json({
    //             msg:"Local path not found"
    //         })
    //     }else{
    //         console.log('imagelocal path is :',imageLocalPath)
    //         const image = await uploadOnCloudinary(imageLocalPath)
    //         console.log(image)
    //         res.status(200).json({
    //             msg:"Success"
    //         })

    //     }
        
    // } catch (error) {
    //     res.status(400).json({
    //         error:error.message
    //     })
    // }
    if(req.file){
        console.log('exist')
        // console.log(req.file)
        const imageLocalPath = req.file.path
        console.log('this is the image local path:',imageLocalPath)
        try {
            if(!imageLocalPath){
                res.status(400).json({
                    msg:"Local path of image not found"
                })
            }else{
                const response = await uploadOnCloudinary(imageLocalPath)
                console.log('Here is the response from cloudinary:', response)
                res.status(200).json({
                    msg:"okay"
                })
            }
        } catch (error) {
            res.status(400).json({
                error:error.message
            })
        }
    }
    else{
        console.log('doesnot exist')
    }
    
    
    
}