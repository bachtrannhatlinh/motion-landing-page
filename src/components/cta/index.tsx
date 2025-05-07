import { Button } from '../ui/button'

const CTA = () => {
  return (
    <div className='py-28 px-16 flex flex-col lg:flex-row items-center justify-between bg-gray-800 text-center gap-20'>
      <div className='flex flex-col gap-6  lg:w-[66%]'>
        <h1 className='font-black text-32 lg:text-40 font-inter leading-[120%]'>Discover Motion's Powerful Business Solutions</h1>
        <p className='font-normal text-18 leading-[120%]'>Unlock your business potential with Motion's innovative solutions</p>
      </div>
      <div className="flex flex-row gap-4">
        <Button variant="default">Get Started</Button>
        <Button variant="outline">Contact Us</Button>
      </div>
    </div>
  )
}

export default CTA