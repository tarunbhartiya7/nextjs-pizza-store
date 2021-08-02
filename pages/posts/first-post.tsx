import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>Cloudinary image</h1>
        <Image
          src="https://res.cloudinary.com/dexkvngbv/image/upload/v1627920277/dubai_aqua_park_vamb1o.jpg" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Your Name"
          priority
        />
        <h1>Local static jpeg</h1>
        <Image
          src="/images/profile.jpeg" // Route of the image file
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
          alt="Your Name"
          priority
        />
        <h1>local png image</h1>
        <Image
          src="/images/test_image.png" // Route of the image file
          height={810} // Desired size with correct aspect ratio
          width={1080} // Desired size with correct aspect ratio
          alt="Your Name"
          priority
        />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>

    </>
  )
}