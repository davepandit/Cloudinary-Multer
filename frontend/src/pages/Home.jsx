import React from 'react'
import { useUpdateImageMutation } from '../slices/images'
import { toast } from 'react-toastify';

const Home = () => {
  const [updateImage, {isLoading, error}] = useUpdateImageMutation()
  
  const handleUploadImage = async(e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0])
    try {
      const res = await updateImage(formData).unwrap();
      toast.success(res.msg);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <>
      <div>Home</div>
      <div>
        {isLoading ? (<div>..LOading</div>) : (
          
            <form onSubmit={handleSubmit}>
              <label htmlFor="image">image</label>
              <input type="file" name='image' id='image' onChange={handleUploadImage}/>
              <button type='submit'>Submit</button>
          </form>
          )
        }
      </div>
    </>
  )
}

export default Home