import { useState } from 'react'

const Profile = () => {
    const [profileImage, setProfileImage] = useState(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if(file) {
            const imageURL = URL.createObjectURL(file)
            setProfileImage(imageURL);
        }
    }
    return(
        <div className="profile">
            <label htmlFor="profileUpload" className='profileLabel'>
                <img 
                    src={profileImage || "/src/assets/profile.jpg"} 
                    alt="profile photo" 
                    className='profilePicture'
                />
                 <div className="change">
                change?
                </div>
            </label>
            <input
                type='file'
                id='profileUpload'
                accept='image/*'
                onChange={handleImageChange}
                className='hidden'
            />
        </div>
    )
}

export default Profile;