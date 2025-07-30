import image from '../assets/wallPaper.svg'
import githubIco from '../assets/github-icon.png'
import googleIco from '../assets/google-icon.png'

function LoginCard() {
    return (
        <>
            <div className="bg-[#f9f9f9] w-100 h-160 md:w-250 rounded-md drop-shadow-2xl flex flex-col justify-center items-center md:justify-start md:flex-row select-none">
                <div className='md:flex md:flex-col space-y-10 p-5 w-full h-full'>
                    <div className=" w-full p-2 space-y-6 flex flex-col items-start justify-center">
                        <p className='text-3xl font-bold'>Log in</p>
                        <p>Log in to your account to upload or download pictures, videos or music</p>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <input type="text"
                            placeholder='Type you email'
                            className='border-1 border-slate-300 pl-5 text-start h-19 rounded-md w-80 md:w-full' />
                    </div>
                    <div className='border-b-2 border-slate-300 w-full h-23 flex flex-row justify-center items-center space-x-9 pb-5'>
                        <p className=' cursor-pointer hover:text-blue-500 duration-200 text-gray-400'>Forgot your password?</p>
                        <button className='bg-cyan-600 w-35 hover:bg-cyan-700 duration-200 h-full p-2 rounded-md text-white font-bold cursor-pointer'>Login</button>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center p-5 space-y-10'>
                        <div>
                            <p>Or login with</p>
                        </div>
                        <div className='space-x-10 w-full flex flex-row'>
                            <button className=' hover:bg-slate-200  duration-200 border-1 border-slate-300 pl-7 h-15 flex flex-row justify-center items-center space-x-2 w-40 p-2 rounded-md text-white font-bold'>
                                <p className=' text-black font-medium'>Google</p> <img src={googleIco}
                                    alt="icone do github"
                                    className='h-8 ml-3' />
                            </button>
                            <button className=' hover:bg-slate-200  duration-200 border-1 border-slate-300 pl-7 h-15 flex flex-row justify-center items-center space-x-2 w-40 p-2 rounded-md text-white font-bold'>
                                <p className='text-black font-medium'>Github</p> <img src={githubIco}
                                    alt="icone do github"
                                    className='h-10' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-0 h-0 md:w-[700px]  md:min-h-full  flex justify-end">
                    <img className='rounded-r-md' src={image} alt="imagem de fundo" />
                </div>
            </div>
        </>
    )
}

export default LoginCard
