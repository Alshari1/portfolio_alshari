import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSuitcase, faBoxesStacked, faUserGroup, faUser, faCartShopping, faIdCardClip, faCarOn, faRightFromBracket, faXmark, faCrown } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css';
import React, { useContext, useState } from "react";
import { AuthContext } from "../Providres/AuthProviders";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2';
import { FaLinkedin } from "react-icons/fa";
import fivericon from '../../assets/10813996_fiverr_icon.svg';
import upworkIcon from '../../assets/1929180_upwork_icon.svg';
import linkedInIcon from '../../assets/icons8-linkedin.svg';
// import { useNavigate } from 'react-router-dom';

const SideNav = ({ show, setShow }) => {
    const { user, googleSignIn, logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [adminInput, setAdminInput] = useState('');
    // const navigate = useNavigate()
    // console.log( adminInput)

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleClose();

        if (adminInput === import.meta.env.VITE_USER) {
            googleSignIn()
                .catch(error => {
                    console.error("Google Sign-In Error:", error);
                });
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                    container: 'custom-toast-error',
                },
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "error",
                title: "Unauthorized"
            });


        }
    };

    const handleLogout = () => {
        logout();
        setAdminInput('')
    };

    const handleCloseBar = () => {
        setShow(false);
    };

    return (
        <>
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>Admin Login</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter the admin code to access the admin features.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="text"
                                label="Admin Code"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={adminInput}
                                autoComplete='off'
                                onChange={(e) => setAdminInput(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
            <div className={`nav-container border border-[#2b3744] bg-slate-900 w-[282px] h-[100vh] lg:w-full overflow-x-hidden overflow-y-auto lg:flex flex-col gap-8 pt-16 ${show ? 'flex absolute lg:fixed lg:top-0 slide-in' : 'hidden slide-out'}`}>
                {
                    show && <span className="text-end pr-5 hover:cursor-pointer"><FontAwesomeIcon onClick={handleCloseBar} className="lg:hidden" icon={faXmark} /></span>
                }
                <a href='#banner'><span><FontAwesomeIcon icon={faHouse} /></span>HOME</a>
                <a href='#features'><span><FontAwesomeIcon icon={faSuitcase} /></span>FEATURES</a>
                <a href='#portfolio'><span><FontAwesomeIcon icon={faBoxesStacked} /></span>PORTFOLIO</a>
                <a href='#resume'><span><FontAwesomeIcon icon={faUserGroup} /></span>RESUME</a>
                <a href='/'><span><FontAwesomeIcon icon={faUser} /></span>CLIENTS</a>
                <a href='/'><span><FontAwesomeIcon icon={faCartShopping} /></span>PRICING</a>
                <a href='#contact'><span><FontAwesomeIcon icon={faIdCardClip} /></span>CONTACT</a>
                {
                    user && <a href="/inventory"><FontAwesomeIcon icon={faCarOn} />Inventory</a>
                }
                {
                    !user ? <a onClick={() => setOpen(true)}><span><FontAwesomeIcon icon={faCrown} /></span>ADMIN ?</a> : <span onClick={handleLogout} className="text-end pr-5 hover:cursor-pointer lg:pr-10"><FontAwesomeIcon onClick={handleLogout} icon={faRightFromBracket} /></span>
                }
                <hr />
                {/* <p>Visite my social profile -</p> */}
                <div className="flex justify-around">

                    <div className="text-3xl p-3 rounded-lg border border-[#2b3744] bg-slate-900 w-fit hover:cursor-pointer">
                        {/* <FaLinkedin className=''/> */}
                        <img className=" bg-white h-7 rounded" src={linkedInIcon} alt="" />
                    </div>
                    <div onClick={() => {window.location.href = 'https://www.fiverr.com/alsharia?public_mode=true'}} className="text-4xl p-3 rounded-lg border border-[#2b3744] bg-slate-900 w-fit  hover:cursor-pointer">
                        <img className=" bg-white h-7 rounded" src={fivericon} alt="" />
                    </div>
                    <div className="text-4xl p-3 rounded-lg border border-[#2b3744] bg-slate-900 w-fit  hover:cursor-pointer">
                        <img className="bg-white h-7 rounded" src={upworkIcon} alt="" />
                    </div>
                </div>
            </div>
            {/* https://www.fiverr.com/alsharia?public_mode=true */}
        </>
    );
};

export default SideNav;