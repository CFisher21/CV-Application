import React, {useState} from 'react';
import EditableField from '../UI/EditableField'

const Contact = () => {
    const className = 'contactGroupSpan'
    const [number, setNumber] = useState('1-234-567-8910')
    const [email, setEmail] = useState('example@email.com')
    const [location, setLocation] = useState('Town, City, Country')
    const [website, setWebsite] = useState('www.examplesite.com')

    
    return (
        <div className="contact">
            <h3 className="contactHeading">Contact</h3>
            <div className="contactGroup">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <EditableField initialValue={number} onSave={setNumber} maxLength={"12"} className={className} type={'tel'}/>
            </div>
            <div className="contactGroup">
            <svg viewBox="0 0 24 24" fill="none" className="contact-icon" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <EditableField initialValue={email} onSave={setEmail} className={className} type={'email'}/>
            </div>
            <div className="contactGroup">
                <svg className="contact-icon" viewBox="0 0 25 25">
                <path id="Location_Pin" data-name="Location Pin" d="M12.5,0A9.24,9.24,0,0,0,3,9.41c0,7.88,8.8,15.17,9.17,15.47a.5.5,0,0,0,.65,0C13.21,24.53,22,16.51,22,9.41A9.24,9.24,0,0,0,12.5,0Zm0,14A4.5,4.5,0,1,1,17,9.5,4.5,4.5,0,0,1,12.5,14Z" fill="white"></path>
                </svg>
                <EditableField initialValue={location} onSave={setLocation} className={className} type={'text'}/>
            </div>
            <div className="contactGroup">
                <svg className="contact-icon" viewBox="0 0 48 48">
                <path d="M24 2C19.6488 2 15.3953 3.29028 11.7774 5.70767C8.15957 8.12506 5.33977 11.561 3.67464 15.581C2.00952 19.6009 1.57384 24.0244 2.42272 28.292C3.27159 32.5596 5.36689 36.4796 8.44365 39.5564C11.5204 42.6331 15.4404 44.7284 19.708 45.5773C23.9756 46.4261 28.3991 45.9905 32.419 44.3253C36.439 42.6602 39.8749 39.8404 42.2923 36.2225C44.7097 32.6047 46 28.3512 46 24C45.9934 18.1673 43.6734 12.5753 39.549 8.45096C35.4247 4.32659 29.8327 2.00662 24 2V2ZM42.318 32H36.13C36.6372 29.6995 36.9189 27.3551 36.971 25H43.949C43.8361 27.4132 43.2834 29.7854 42.318 32ZM4.05099 25H11.029C11.0811 27.3551 11.3628 29.6995 11.87 32H5.68199C4.71662 29.7854 4.16388 27.4132 4.05099 25V25ZM5.68199 16H11.87C11.3628 18.3005 11.0811 20.6449 11.029 23H4.05099C4.16388 20.5868 4.71662 18.2146 5.68199 16V16ZM25 14V4.092C28.639 4.692 31.764 8.528 33.512 14H25ZM34.075 16C34.6171 18.2958 34.9188 20.6418 34.975 23H25V16H34.075ZM23 4.092V14H14.488C16.236 8.528 19.361 4.692 23 4.092ZM23 16V23H13.028C13.0842 20.6418 13.3859 18.2958 13.928 16H23ZM13.028 25H23V32H13.925C13.3839 29.7041 13.0832 27.3581 13.028 25V25ZM23 34V43.908C19.361 43.308 16.236 39.472 14.488 34H23ZM25 43.908V34H33.512C31.764 39.472 28.639 43.308 25 43.908ZM25 32V25H34.972C34.9158 27.3582 34.6141 29.7042 34.072 32H25ZM36.971 23C36.9189 20.6449 36.6372 18.3005 36.13 16H42.318C43.2834 18.2146 43.8361 20.5868 43.949 23H36.971ZM41.294 14H35.613C34.7451 10.7415 33.113 7.73679 30.852 5.235C35.2483 6.8496 38.9419 9.95006 41.294 14V14ZM17.148 5.235C14.887 7.73679 13.2549 10.7415 12.387 14H6.70599C9.05805 9.95006 12.7517 6.8496 17.148 5.235V5.235ZM6.70599 34H12.387C13.2549 37.2585 14.887 40.2632 17.148 42.765C12.7517 41.1504 9.05805 38.0499 6.70599 34V34ZM30.852 42.765C33.113 40.2632 34.7451 37.2585 35.613 34H41.294C38.9419 38.0499 35.2483 41.1504 30.852 42.765Z" fill="white"></path>
                </svg>
                <EditableField initialValue={website} onSave={setWebsite} className={className} type={'text'}/>
            </div>
        </div>
    )
} 

export default Contact;