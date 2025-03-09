export default function DownloadResumeBtn() {
  return (
    <a
      href='/CV_DON_NGUYEN_FRONTEND_DEV.pdf'
      download={true}
      className='py-2 px-4 bg-darkBlue rounded-lg shadow-xl text-xl text-white hover:bg-lightBlue focus:bg-lightBlue  light:shadow-xl outline-none'
    >
      Download CV
    </a>
  )
}
