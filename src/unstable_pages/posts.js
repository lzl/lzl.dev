// import LeftRight from '@/components/LeftRight'
// import Menu, { profileMenu } from '@/components/Menu'
// import { useCreatePost, usePosts } from '@/hooks/useAPI'

// // {
// //   "userId": 1,
// //   "id": 1,
// //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// // },

// function Right() {
//   const { isLoading, error, data } = usePosts()
//   const mutation = useCreatePost()

//   const handlePost = (post) => {
//     mutation.mutate(post)
//   }

//   if (isLoading) return 'Loading...'
//   if (error) return 'An error has occurred: ' + error.message
//   return (
//     <ul className="space-y-8">
//       {data.map((post) => (
//         <li key={post.id} className="space-y-2">
//           <div className="flex space-x-4">
//             <h2 className="text-lg font-semibold">{post.title}</h2>
//             <button onClick={() => handlePost(post)}>copy</button>
//           </div>
//           <p>{post.body}</p>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default function PostsPage() {
//   return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} />
// }
