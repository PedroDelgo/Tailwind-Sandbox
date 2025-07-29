import image from '../assets/wallPaper.svg'

function LoginCard() {
    return (
        <>
            <div className="bg-[#f9f9f9] w-100 h-160 md:w-250 rounded-md drop-shadow-2xl flex flex-col justify-center items-center md:justify-start md:flex-row">
                <div className="bg-slate-200 w-full p-2 space-y-6 flex flex-col items-start justify-center">
                    <p className='text-3xl font-bold'>Log in</p>
                    <p>Log in to your account to upload or download pictures, videos or music</p>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <input type="text"
                    placeholder='Digite seu email'
                    className='border-1 border-slate-300 pl-5 text-start h-19 rounded-md w-80'/>
                </div>
                <div className='border-b-2 border-slate-300 w-full h-20 flex flex-row justify-center items-center space-x-9'>
                    <p className='text-gray-400'>Forgot your password?</p>
                    <button className='bg-cyan-600 h-full p-2 rounded-md text-white font-bold'>Change password</button>
                </div>
                <div className="w-0 h-0 md:w-1/2 md:h-full flex justify-end">
                    <img className='h-160 rounded-r-md' src={image} alt="imagem de fundo" />
                </div>
            </div>
        </>
    )
}

export default LoginCard
