//work in progress
//will finish for next commit
// import { useState, useEffect } from 'react';
// import { projectFireStore, timestamp } from '../firebase/config';

// const useForm = (article) => {
//     const [title, setTitle] = useState(null);
//     const [content, setContent] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const collectionRef = projectFireStore.collection('articles');
//         async () => {
//             const articleTitle =  title;
//             const articleContent = content;
//             const createdAt = timestamp();
//         collectionRef.add({ articleTitle, articleContent, createdAt });
//         }
//     }, [article])
//     return { title, content, error };
// }

// export default useForm;