import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className="flex flex-wrap gap-9 text-white">
            <div className="border mx-auto border-[#2b3744] p-3 sm:w-64 sm:justify-center lg:justify-around  lg:w-96 rounded-lg flex flex-col lg:flex-row gap-6">
                <div>
                    <FontAwesomeIcon className='text-3xl' icon={faGraduationCap} />
                </div>
                <div className="space-y-1 text-justify">
                    <div className="font-semibold text-lg">Bohubrihi</div>
                    <p>Web development course</p>
                    <p><small>completed 2022</small></p>
                </div>
            </div>
            <div className="border mx-auto border-[#2b3744] p-3 sm:w-64 sm:justify-center lg:justify-around lg:w-96 rounded-lg flex flex-col lg:flex-row gap-6">
                <div className=''>
                    <FontAwesomeIcon className='text-3xl' icon={faGraduationCap} />
                </div>
                <div className="space-y-1 text-justify">
                    <div className="font-semibold text-lg">Programming herro</div>
                    <p>Web development course</p>
                    <p><small>completed 2022</small></p>
                </div>
            </div>
        </div>
    );
};

export default Education;
