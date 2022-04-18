import React from 'react';

const Blog = () => {
    return (
        <div >
            <div>
                <h2 className='mt-5 px-5'> Authorization and Authentication</h2>
                <p className=' px-5 '> Authentication refers to the automated method of confirming a person's identity, whereas authorization is the act of confirming an user's access to certain apps, folders, and data. Authentication and authorization serve the same purpose in the technological environment. Authentication seems to be a technique for ensuring that people are who they claim they are. After this has been verified, authorization is used to get the user authority to access various levels of data and execute certain activities, based on the laws defined for various sorts of users.
                    <br />
                    <span className='fw-bold'>Examples of Authentication:</span> Workers receive access to an HR application which contains personal  salary data, paid holidays, and 401K data by authenticating their identification.
                    <br />
                    <span className='fw-bold'>Examples of Authorization:</span> Workers and Human resource managers may select various sets of detail based on the permissions provided by the company once their degree of access has been allowed.
                </p>
            </div >
            <div>
                <h2 className='mt-5 px-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className=' px-5 ' >Firebase, which is owned by Google, is a suite of solutions that make it possible to create web and mobile apps, enhance application integrity, and assist your customers in growing their businesses. In the database, Firebase maintains all data in real time. As a result, data transfer to and from the system is simple and speedy. As a result, Firebase can be used to construct mobile apps including such live streaming, chat messaging, and so on.
                    <br />
                    A user name and password are typically used to authenticate a website. Cards, retina scans, voice recognition, and fingerprints are a few of the methods to authenticate.</p>
            </div>

            <div>
                <h2 className='mt-5 px-5'>What other services does firebase provide other than authentication?
                </h2>
                <p className=' px-5 '>Firebase offers a variety of functions, the most important of which are:</p>
                <div className=' px-5 '>
                    <ul >
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Blog;