import Typewriter from 'typewriter-effect';
import pic from '../../../assets/jaheda2.png'

const Banner = () => {
    return (
        <div id='banner' className="flex flex-col items-center gap-10 text-white">
            <div className="circular_image border border-[#927c45] rounded-full w-56 h-56 p-[2px] bg-[#fec544] overflow-hidden lg:mt-5">
                <img 
                    className='w-full h-full object-cover rounded-full' 
                    src='https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBtYW4lMjBpbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D' 
                    alt="Profile" 
                />
            </div>
            <p style={{fontFamily:"Azeret Mono",}} className='text-4xl font-bold'>Alshaharia Bhuiyan</p>
            <div className='text-2xl font-semibold flex gap-2'>
                I Am
                <span className='text-[#fec544]'>
                <Typewriter 
    options={{
        strings: [
            'Front-end Developer',
            'Back-end Developer',
            'Full Stack Developer',
            'JavaScript Enthusiast',
            'React Specialist',
            'Node.js Expert',
            'Web Developer',,
            'UI/UX Designer',
            'Agile Practitioner'
        ],
        autoStart: true,
        loop: true,
    }}
/>
                </span>
            </div>
        </div>
    );
};

export default Banner;
