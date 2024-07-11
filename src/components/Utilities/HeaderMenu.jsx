import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderMenu = ({ title }) => {
    const router = useRouter()

    const handleButton = () => {
        router.back()
    }

    return (
        <div>
            <div className="py-8 relative mx-16 mb-2">
                <button onClick={handleButton} className="absolute left-0 text-white text-2xl font-medium transition-all duration-200 hover:text-[#F0A500] hover:scale-110">
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <h3 className="text-center text-2xl text-white">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderMenu