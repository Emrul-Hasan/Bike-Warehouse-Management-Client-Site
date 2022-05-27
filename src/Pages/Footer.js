import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-secondary text-white py-5 mt-5'>
			<div className='container'>
				<div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
					<Link to='/' className='text-decoration-none text-white'>
						<h3>Transport Inc</h3>
					</Link>
					<p className='mb-1 my-3 my-md-0'>
						&copy;Emrul Hasan {new Date().getFullYear()} | all right reserved{" "}
					</p>
					<p className='mb-1 my-3 my-md-0'>
						<span className='mx-2'>
							<FaGithub />
						</span>
						<span className='mx-2'>
							<FaTwitter />
						</span>
						<span className='mx-2'>
							<FaFacebook />
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
