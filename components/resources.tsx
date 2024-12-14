import Link from 'next/link'

export default function Resources() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">Resources</h2>
        <div className="flex justify-center space-x-8">
          <Link href="/blog" className="text-[#6366F1] hover:underline text-lg">
            Blog
          </Link>
          <Link href="/pricing" className="text-[#6366F1] hover:underline text-lg">
            Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

