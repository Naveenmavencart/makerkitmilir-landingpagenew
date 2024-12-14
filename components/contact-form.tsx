// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'

// interface ContactFormProps {
//   onClose: () => void
// }

// export default function ContactForm({ onClose }: ContactFormProps) {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log('Form submitted:', { name, email, message })
//     onClose()
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Support</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <Input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="mt-1"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <Input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//             <Textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               className="mt-1"
//             />
//           </div>
//           <div className="flex justify-end space-x-2">
//             <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
//             <Button type="submit">Send</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

